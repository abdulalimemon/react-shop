import React from 'react';
import './App.css';
import Footer from './components/Footer';
import MobileBottomNav from './components/Navbar/MobileBottomNav';
import Navbar from './components/Navbar/Navbar';
import PageRoutes from './PageRoutes';



function App() {

  return (
    <>
      <Navbar></Navbar>
      <PageRoutes></PageRoutes>
      <Footer></Footer>
      <MobileBottomNav></MobileBottomNav>
    </>
  );
}

export default App;
