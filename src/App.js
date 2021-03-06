import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import Search from './components/Search';


function App() {
  return (
    <>

      <Navbar />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="help" element={<Help />} />
        <Route path="search/*" element={<Search/>} />

      </Routes>

    </>
  );
}

export default App;
