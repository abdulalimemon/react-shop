import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

const PageRoutes = () => {
    return (
        <>
           <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            {/* <Route path='/' element={<}></Route> */}
            <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes> 
        </>
    );
};

export default PageRoutes;