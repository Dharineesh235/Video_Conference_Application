import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Hall from './Hall/Hall';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conference/:userName/:roomID' element={<Hall/>}/>
      </Routes>
    </div>
  );
}

export default App;
