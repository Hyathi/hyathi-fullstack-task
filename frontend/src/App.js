import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbars from './components/Navbars';
import Homepage from './screens/homepage/Homepage';
import Register from './screens/register/Register';
import Login from './screens/login/Login';

function App() {
  return (
    <div>
      <Navbars/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/> } />
          <Route exact path='/register' element={<Register/> } />
          <Route exact path='/login' element={<Login/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
