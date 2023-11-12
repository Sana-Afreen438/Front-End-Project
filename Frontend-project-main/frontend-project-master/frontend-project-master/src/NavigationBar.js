import React from 'react';
import './NavigationBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { useUserContext } from './userContext';


export default function NavigationBar({ isLoggedIn, isAdmin }) {

  return (
    <div>
      <AppBar variant='outlined' className='appBar'>
        <ShoppingCartIcon />
        <ToolBar className='toolBar'>
          {!isLoggedIn ? (
            <div>
              <Link to="/auth">
                <button className='auth-button'>Sign In</button>
              </Link>
              <Link to="/users">
                <button className='auth-button'>Sign Un</button>
              </Link>
            </div>
          ) : (
            <div>
              <input className='searchBox' type="text" placeholder="Search" />
              {isAdmin && <Link to="/add-products">
                <button className='add-products'>Add Products</button>
              </Link>} 
              <button onclick='logoutClicked'>Log Out</button>
            </div>
          )}
        </ToolBar>
      </AppBar>
    </div>
  );
}


