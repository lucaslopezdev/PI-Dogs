import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element='{}' />
        <Route path='/create' element='{}' />
      </Routes>
    </div>
  )
}

export default App
