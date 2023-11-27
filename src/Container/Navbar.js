import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  
    <div class="collapse navbar-collapse navmain" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link></li>
        <li class="nav-item"><Link to='/insert' class="nav-link active" aria-current="page" href="#">Insert</Link></li>
        <li class="nav-item"><Link to="/login" class="nav-link active" aria-current="page" href="#">Login</Link></li>
       
      </ul>
    </div>
  </div>
</nav>      
        </div>
    );
};

export default Navbar;