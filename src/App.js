import './App.css';
import MobileBottomNav from './components/Navbar/MobileBottomNav';
import Navbar from './components/Navbar/Navbar';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <>
      <Navbar>
        <PageRoutes></PageRoutes>
        <MobileBottomNav></MobileBottomNav>
      </Navbar>
    </>
  );
}

export default App;
