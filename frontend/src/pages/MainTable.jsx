import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox } from 'react-icons/md';

import BooksTable from '../components/home/BooksTable';

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
        <h3 className='text-2xl my-8'>Books Table</h3>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading 
        ? <Spinner /> 
        : <BooksTable books={books} />
      }
    </div>
  )
}

export default Home;
