import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

// Alert
import { useSnackbar } from 'notistack';


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Alert 
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please check console ... ');
        console.log(error);
      })
  }, []);

  const handleEditBook = () => {
    const data = {
      title, 
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully ... ', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happend. Please check console ... ');
        enqueueSnackbar('An error happend. Please check console ... ', { variant: 'error' });
        console.log(error);
      })
  }

  return (
    <div className='p-4 mt-20'>
      <BackButton />
      <h1 className='text-2xl my-4 flex flex-col items-center'>Edit book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-700 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
            type="text" 
            value={title}
            onChange = {(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
            type="text" 
            value={author}
            onChange = {(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input 
            type="text" 
            value={publishYear}
            onChange = {(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <button className='p-2  bg-sky-700 m-8' onClick={handleEditBook}>
          Change Book
        </button>
      </div>
    </div>
  )
}

export default EditBook;