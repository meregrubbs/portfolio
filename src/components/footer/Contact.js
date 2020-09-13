import React from 'react';
import Button from '@material-ui/core/Button';

const Contact = () => {
  return (
    <div>
      <h1 className='section-title'>Contact</h1>
      <p>Please fill out the form below & I'll reply via email.</p>
      <p style={{ marginBottom: '0' }}>
        Alternatively, feel free to send me an email directly:{' '}
      </p>
      <Button href='mailto:meregrubbs@gmail.com' style={link}>
        meregrubbs@gmail.com
      </Button>
      <form name='contact' data-netlify='true'>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' />
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message' cols='30' rows='10'></textarea>
        <div data-netlify-recaptcha='true'></div>
        <Button variant='outlined' type='submit'>
          Send
        </Button>
      </form>
    </div>
  );
};

const link = {
  color: '#c777da',
  fontFamily: "'DM Sans', sans-serif",
  textTransform: 'lowercase',
  paddingLeft: '1px',
  paddingRight: '1px',
  paddingTop: '0'
};

export default Contact;
