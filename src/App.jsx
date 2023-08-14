import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Help from './routes/Help/Help';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </div>
  );
};

export default App; 
