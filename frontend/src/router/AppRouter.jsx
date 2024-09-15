import { Routes, Route } from "react-router-dom"; 

import Layout from "../components/layout/Layout.jsx";

import MainTable from '../pages/MainTable'
import MainCard from '../pages/MainCard'

import Home from '../pages/Home';
import CreateBook from '../pages/CreateBook';
import ShowBook from '../pages/ShowBook';
import EditBook from '../pages/EditBook';
import DeleteBook from '../pages/DeleteBook';

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/books/table" element={<MainTable />} />
              <Route path="/books/card" element={<MainCard />} />
              <Route path='/books/create' element={<CreateBook />} />
              <Route path='/books/details/:id' element={<ShowBook />} />
              <Route path='/books/edit/:id' element={<EditBook />} />
              <Route path='/books/delete/:id' element={<DeleteBook />} />  
              {/* <Route path="*" element={<Notfound />} /> */}
            </Route>
        </Routes>


    </div>
  )
}

export default AppRouter;
