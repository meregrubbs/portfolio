import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Hero() {
  return (
    <div id='hero' className='flex-column-center'>
      <Container maxWidth='md'>
        <div className='flex-column-center hero-content'>
          <h1>A web developer & designer who collaborates</h1>

          <h2>
            I continue problem solving until we find a solution that fits your
            needs.
          </h2>
          <div className='hero-buttons'>
            <Button href='#portfolio' variant='contained'>
              View My Work
            </Button>
            <Button href='#footer' variant='outlined'>
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
