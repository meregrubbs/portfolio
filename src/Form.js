import React from 'react';
import { init } from 'emailjs-com';
init('user_FQvCwBFGhZjkHcWbSevt9');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: '', name: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className='test-mailing'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={this.handleNameChange}
          required
          value={this.state.name}
          placeholder='name'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={this.handleEmailChange}
          required
          value={this.state.email}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          onChange={this.handleMessageChange}
          required
          value={this.state.feedback}
          style={{ width: '100%', height: '150px' }}
        />

        <input
          type='button'
          value='Submit'
          className='btn btn--submit'
          onClick={this.handleSubmit}
        />
      </form>
    );
  }

  handleMessageChange(event) {
    this.setState({ feedback: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit() {
    const templateId = 'template_id';

    this.sendFeedback(templateId, {
      message: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }
}
