import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const About = () => {
  return (
    <div style={{ marginRight: '1em', marginBottom: '2em' }}>
      <h1 className='section-title'>About</h1>
      <p>
        My name is Meredith Grubbs, and I’m a freelance developer & designer
        located in Colorado.
      </p>
      <p>
        I’m self-taught, and do my best to learn something new each and every
        day.
      </p>
      <p>
        Other than design & coding, I enjoy hiking in the woods, cooking
        delicious meals, and petting my black cat, Eloise.
      </p>
      <div className='social-media'>
        <a
          href='https://www.linkedin.com/in/meredithgrubbs/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-icon'
        >
          <LinkedInIcon
            fontSize='large'
            style={{ color: 'white', borderColor: 'white' }}
          />
        </a>
        <a
          href='https://www.instagram.com/meregrubbs/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-icon'
        >
          <InstagramIcon
            fontSize='large'
            style={{ color: 'white', borderColor: 'white' }}
          />
        </a>
        <a
          href='mailto:meregrubbs@gmail.com?subject=Hello from meredithgrubbs.com'
          target='_blank'
          rel='noopener noreferrer'
          className='social-media-icon'
        >
          <EmailIcon
            fontSize='large'
            style={{ color: 'white', borderColor: 'white' }}
            className='social-media-icon'
          />
        </a>
      </div>
    </div>
  );
};

export default About;
