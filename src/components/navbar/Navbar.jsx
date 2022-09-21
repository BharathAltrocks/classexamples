import React from 'react'
import { useEffect } from 'react';
import{NavLink,Outlet,useLocation} from 'react-router-dom' 
import './navbar.css'
function Navbar() {
  const location =useLocation();
  useEffect(()=>{
    console.log(`location check up`+location.pathname);
  })
  return (
    <div className='navbar navbar-expand-lg'>
    <ul className='navbar-nav '>
    <li className='nav-item nav-tab'><NavLink  style={({ isActive }) => ({ 
                            color: isActive ? 'blue ' : 'white' })}  exact activeClassName="nav-link-active" className='nav-link' to="/">
        Home Page
        </NavLink></li>
        <li className='nav-item'><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} activeClassName="activeLink" className='nav-link' to="/class">
        Class Component
        </NavLink></li>
        <li className='nav-item'><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} activeClassName="activeLink" className='nav-link' to="/function">
        Function Component
        </NavLink></li>
        <li className='nav-item'><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'blue' : 'black' })} activeClassName="activeLink" className='nav-link' to="/axios">
        Axios Map Component
        </NavLink></li>
</ul>
        <Outlet />
    </div>
  )
}

export default Navbar