import React from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target);

    emailjs
      .sendForm(
        'service_nns7oa9',
        'template_gx9h187',
        e.target,
        'user_FQvCwBFGhZjkHcWbSevt9'
      )
      .then(
        result => {
          // clear form
          const name = document.getElementById('name');
          const email = document.getElementById('email');
          const message = document.getElementById('message');

          name.value = '';
          email.value = '';
          message.value = '';

          // sent message
          const submit = document.getElementById('submit');

          submit.value = 'Message Sent!';
          submit.style.fontWeight = 'bold';
          submit.style.borderColor = 'green';

          setTimeout(function() {
            submit.value = 'Send';
            submit.style.fontWeight = '500';
            submit.style.borderColor = '#c777da';
          }, 3000);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <input type='hidden' name='contact_number' />
      <label>Name</label>
      <input type='text' name='user_name' id='name' />
      <label>Email</label>
      <input type='email' name='user_email' id='email' />
      <label>Message</label>
      <textarea name='message' id='message' />
      <input className='btn--submit' type='submit' value='Send' id='submit' />
    </form>
  );
}
