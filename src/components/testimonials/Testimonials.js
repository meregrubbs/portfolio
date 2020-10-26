import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleTestimonial from './SingleTestimonial';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

// Testimonial Images (200px width)
import maressa from './testimonialImages/maressa.png';
import alice from './testimonialImages/alice.png';
import emmie from './testimonialImages/emmie.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    paddingBottom: '2em',
    paddingTop: '2em',
    backgroundColor: '#c777da',
    color: '#fff'
  }
}));

const Testimonials = ({
  testimonialImage,
  testimonialQuote,
  testimonialTitle,
  testimonialClass
}) => {
  const classes = useStyles();

  return (
    <div id='testimonials' className={classes.root}>
      <Container maxWidth='md'>
        <h1
          className='section-title'
          style={{ marginTop: '1em', color: 'white', borderColor: 'white' }}
        >
          Testimonials
        </h1>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            {/* Alice */}
            <SingleTestimonial
              testimonialImage={alice}
              testimonialQuote='Working with Meredith truly exceeded my expectations: She was speedy, creative, responsive, and her work is just top quality. I feel that my website represents exactly what I hoped to achieve; Meredith really took the time to understand what I was trying to do, and came up with smart, great-looking ways to execute. I am really thrilled with the result (and so relieved I didn’t try to do this myself without her expertise). And I wouldn’t hesitate to recommend her services to anyone!'
              testimonialTitle='Alice Dubin, Journalist & Content Marketing Writer'
              testimonialClass='alice'
            />
            {/* Maressa */}
            <SingleTestimonial
              testimonialImage={maressa}
              testimonialQuote="Meredith Grubbs is an intuitive, creative, and communicative designer who is perpetually taking her skills to the next level and positively fired up to meet her clients' expectations. Working with me to design my first website to promote my work as a journalist and content strategist, Meredith worked diligently to perfect even the most minute details in an effort to ensure that my site fully represented my brand. Her sunny, upbeat, can-do attitude is unparalleled and clearly fueled her ability to deliver a result that was thoroughly in line with my initial vision. Anyone looking to build or refresh their web presence would be beyond fortunate to work with Meredith."
              testimonialTitle='Maressa Brown, Journalist & Content Strategist'
              testimonialClass='maressa'
            />
            {/* Emmie */}
            <SingleTestimonial
              testimonialImage={emmie}
              testimonialQuote='It was a pleasure working with Meredith in designing my first website! She is patient and detail-oriented, which helped me feel comfortable expressing my ideas to her while knowing nearly nothing about web design. She has smart ideas to make your website pop and move up in the search ranks. I especially appreciated her creativity and enthusiasm to design my logo from scratch. She even took the time to meet and show me the basics on Wordpress. Meredith offers everything you could ask for with a knack for format and aesthetics. So grateful for my beautiful site, I would choose her again in an instant!'
              testimonialTitle='Emmie Brown, Naturopathic Doctor'
              testimonialClass='emmie'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  testimonialImage: PropTypes.string.isRequired,
  testimonialQuote: PropTypes.string.isRequired,
  testimonialTitle: PropTypes.string.isRequired,
  testimonialClass: PropTypes.string.isRequired
};

export default Testimonials;
