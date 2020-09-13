import React from 'react';
import logo from '../../images/meg_logo_white.svg';
import HamburgerMenu from './HamburgerMenu';

export default function NavBar() {
  return (
    <header>
      <img className='logo' src={logo} alt='Meredith Grubbs' />

      <nav id='desktop-nav'>
        <a className='active' href='#root'>
          Home
        </a>
        <a href='#footer'>About</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#testimonials'>Testimonials</a>
        <a href='#footer'>Contact</a>
      </nav>

      <div id='mobile-nav'>
        <HamburgerMenu />
      </div>
    </header>
  );
}
