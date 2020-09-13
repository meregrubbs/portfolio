import React from 'react';
import emailjs from 'emailjs-com';

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nns7oa9',
        'template_gx9h187',
        e.target,
        'user_FQvCwBFGhZjkHcWbSevt9'
      )
      .then(
        result => {
          console.log(result.text);
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
      <input type='text' name='user_name' />
      <label>Email</label>
      <input type='email' name='user_email' />
      <label>Message</label>
      <textarea name='message' />
      <input class='btn--submit' type='submit' value='Send' />
    </form>
  );
}
