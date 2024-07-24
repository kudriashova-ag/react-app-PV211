import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import  './Header.css';
const Header = () => {
    const location = useLocation();    
    return (
      <header>
        <nav>
          {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
          <NavLink to="todo">Todo</NavLink>
          <NavLink to="example">Example</NavLink>
          <NavLink to="counters">Counters</NavLink>
        </nav>
      </header>
    );
}

export default Header;
