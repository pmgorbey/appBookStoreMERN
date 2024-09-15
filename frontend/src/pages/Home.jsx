import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/books')
      .then(response => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 mt-20'>

      <div className='flex justify-between items-center'>
        <h1 className='text-2xl my-8'>Books List</h1>

        <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-700 hover:bg-sky-500 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-700 hover:bg-sky-500 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading 
        ? <Spinner /> 
        : showType === 'table' 
          ? <BooksTable books={books} />
          : <BooksCard books={books} /> 
      }
    </div>
  )
}

export default Home;
