import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Container/Navbar';
import Home from './Container/Home';
import Insert from './Container/Insert';
import View from './Container/View';
import Edit from './Container/Edit';
import Login from './Container/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/insert' element={<Insert></Insert>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
