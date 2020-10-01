import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
      <NavLink activeClassName="active" className="navbar-brand" to="/home">WikiCountries</NavLink>
     
    </div>
  </nav>
  )
}
export default NavBar