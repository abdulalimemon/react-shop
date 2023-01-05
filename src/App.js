import './App.css';
import Cart from './components/Cart/Cart';
import MobileBottomNav from './components/Navbar/MobileBottomNav';
import Navbar2 from './components/Navbar/Navbar';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <>
      <Navbar2>
      </Navbar2>
        <PageRoutes></PageRoutes>
        <MobileBottomNav></MobileBottomNav> 
    </>
  );
}

export default App;
