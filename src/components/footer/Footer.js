import React from 'react';
import About from './About';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    paddingTop: '3em',
    paddingBottom: '4em'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer id='footer' className={classes.root}>
      <Container maxWidth='md'>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item sm={6}>
            <About />
          </Grid>
          <Grid item sm>
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
