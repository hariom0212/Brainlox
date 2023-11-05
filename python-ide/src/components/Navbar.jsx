import React from 'react';
import {Link} from 'react-router-dom';
import "../css/navbar.css";
import Menu from '@mui/material/Menu';
import { Rotate as Hamburger } from 'hamburger-react'
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".nav").className = "nav stickyNav";
    } else {
      document.querySelector(".nav").className = "nav";
    }
  };
  window.addEventListener('scroll', handleScroll);




    
  return (
    <div className='nav'>
       
      <div className='navbar'>
        <img
          className='head-img'
          src="/images/brainLox_logo.jpeg"
          alt='main-logo'
        />
                    
      
      <div className='nav-options'>

     
          
       


        
        <Link style={{ textDecoration: 'none'}} to='/problems'>
          <MenuItem>
            <strong className='nav-item'>Practice</strong>
          </MenuItem>
        </Link>  

        <Link style={{ textDecoration: 'none'}} to='/playground'>
          <MenuItem>
            <strong className='nav-item'>Playground</strong>
          </MenuItem>
        </Link>
        
        <Link style={{ textDecoration: 'none'}} to='/workshops'>
          <MenuItem>
            <strong className='nav-item'>Workshop</strong>
          </MenuItem>  
        </Link>

        <Link style={{ textDecoration: 'none'}} to='/'>
          <MenuItem>
            <strong className='nav-item'>
              <LogoutIcon />
              Log Out
            </strong>
          </MenuItem>
        </Link>
        
      </div>

      <span onClick={handleClick} className='nav-menu-btn'>
        <h1><Hamburger toggled={open} /></h1>
      </span>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link style={{ textDecoration: 'none' }} to='/problems'>
          <MenuItem>
            <strong className='nav-item'>Practice</strong>
          </MenuItem>
        </Link>  

        <Link style={{ textDecoration: 'none' }} to='/playground'>
          <MenuItem>
            <strong className='nav-item'>Playground</strong>
          </MenuItem>
        </Link>
        
        <Link style={{ textDecoration: 'none' }} to='/workshop'>
          <MenuItem>
            <strong className='nav-item'>Workshop</strong>
          </MenuItem>  
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/'>
          <MenuItem>
            <strong className='nav-item'>
              <LogoutIcon />
              Log Out
            </strong>
          </MenuItem>
        </Link>

      </Menu>
      </div>
      
    </div>
  )
}

export default Navbar;