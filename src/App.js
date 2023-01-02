import './App.css';
import Navbar from './components/Navbar/Navbar';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <>
      <Navbar>
        <PageRoutes></PageRoutes>
      </Navbar>
    </>
  );
}

export default App;
