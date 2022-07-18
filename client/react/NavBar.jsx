import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBar = props => {

  const logOut = () => {
    document.cookie = "SSID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  }

  return (
    <> 
      <div className="nav"> 
        <div><Link className="nav-link" to="/">Dashboard</Link></div>
        <div><Link className="nav-link" to="/income">Income</Link></div>
        <div><Link className="nav-link" to="/expenses">Expenses</Link></div>
        <div><Link className="nav-link" to="/net">Net</Link></div>
        <div><Link className="nav-link" to="/assets">Assets</Link></div>
        <div><Link className="nav-link" to="/investments">Investments</Link></div>
        <div><Link className="nav-link" to="/" onClick={logOut}>Logout</Link></div>
      </div>
    </>
  )
}

export default NavBar;