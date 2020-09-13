import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  state = {
    image: '',
    blurb: '',
    url: '',
    testimonialImage: '',
    testimonialQuote: '',
    testimonialTitle: ''
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='md'>
          <NavBar />
          <Hero />
        </Container>
        <Portfolio
          image={this.state.image}
          blurb={this.state.blurb}
          url={this.state.url}
        />

        <Testimonials
          testimonialImage={this.state.testimonialImage}
          testimonialQuote={this.state.testimonialQuote}
          testimonialTitle={this.state.testimonialTitle}
        />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
