import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Products from './components/Products';

function App() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col h-screen">
      <Landing />
     
    </div>
    <Products />
    </>
  );
}

export default App;
