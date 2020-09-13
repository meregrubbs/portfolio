import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SingleTestimonial from './SingleTestimonial';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

// Testimonial Images
import maressa from './testimonialImages/maressa.png';
import emmie from './testimonialImages/emmie_brown.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    paddingBottom: '4em',
    paddingTop: '2em',
    backgroundColor: '#c777da',
    color: '#fff'
  }
}));

const Testimonials = ({
  testimonialImage,
  testimonialQuote,
  testimonialTitle
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
            <SingleTestimonial
              testimonialImage={maressa}
              testimonialQuote="Meredith Grubbs is an intuitive, creative, and communicative designer who is perpetually taking her skills to the next level and positively fired up to meet her clients' expectations. Working with me to design my first website to promote my work as a journalist and content strategist, Meredith worked diligently to perfect even the most minute details in an effort to ensure that my site fully represented my brand. Her sunny, upbeat, can-do attitude is unparalleled and clearly fueled her ability to deliver a result that was thoroughly in line with my initial vision. Anyone looking to build or refresh their web presence would be beyond fortunate to work with Meredith."
              testimonialTitle='Maressa Brown, Journalist & Content Strategist'
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
  testimonialTitle: PropTypes.string.isRequired
};

export default Testimonials;
