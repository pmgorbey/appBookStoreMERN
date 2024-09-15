import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

// Alert
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Alert 
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
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

      <h1 className='text-2xl my-4 flex flex-col items-center'>Delete Book</h1>

      {loading ? <Spinner /> : ''}

      <div className="flex flex-col items-center border-2 border-sky-700 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-1xl'>Are you sure You want to delete this Book?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full rounded-lg'
          onClick={handleDeleteBook}
        >
          Yes, I want to Delete
        </button>

      </div>

    </div>
  )
}

export default DeleteBook