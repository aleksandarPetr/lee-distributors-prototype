import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Notice 'Routes' instead of 'Switch'
import Home from './pages/Home/Home';
import Info from './pages/Info/Info';
import Confirmation from './pages/Confirmation/Confirmation'; // Fixed the path

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />{' '}
          <Route path='/confirmation' element={<Confirmation />} />{' '}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
