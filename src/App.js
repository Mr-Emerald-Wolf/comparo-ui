import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'

function App() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col h-screen">
      <Landing />
    </div>
    </>
  );
}

export default App;
