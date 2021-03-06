import React from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submit = document.getElementById('submit');

    if (name.value !== '' && email.value !== '' && message.value !== '') {
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
            name.value = '';
            email.value = '';
            message.value = '';

            // sent message
            submit.value = 'Message Sent!';
            submit.style.borderColor = 'green';

            setTimeout(function() {
              submit.value = 'Send';
              submit.style.borderColor = '#c777da';
            }, 3000);
          },
          error => {
            console.log(error.text);
          }
        );
    } else {
      submit.value = 'Please fill in all fields!';
      submit.style.borderColor = 'red';

      setTimeout(function() {
        submit.value = 'Send';
        submit.style.borderColor = '#c777da';
      }, 3000);
    }
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
