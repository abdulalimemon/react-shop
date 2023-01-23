import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';

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
            <Route path='/product/:id' element={<SingleProduct></SingleProduct>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes> 
        </>
    );
};

export default PageRoutes;