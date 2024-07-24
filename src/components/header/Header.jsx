import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import  './Header.css';
import { ThemeContext } from '../../contexts/themeContext';

const Header = () => {
  const location = useLocation(); 
  const {theme, toggleTheme} = useContext(ThemeContext);

    return (
      <header>
        <nav>
          {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
          <NavLink to="todo">Todo</NavLink>
          <NavLink to="example">Example</NavLink>
          <NavLink to="counters">Counters</NavLink>
        </nav>

        {theme}
      </header>
    );
}

export default Header;
