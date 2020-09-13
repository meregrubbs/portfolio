import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' style={{ color: 'white' }} />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link className='mobile-link active' href='#root' underline='none'>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='mobile-link' href='#footer' underline='none'>
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='mobile-link' href='#portfolio' underline='none'>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='mobile-link' href='#testimonials' underline='none'>
            Testimonials
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='mobile-link' href='#footer' underline='none'>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
