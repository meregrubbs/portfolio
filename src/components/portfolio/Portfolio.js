import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PortfolioItem from './PortfolioItem';
import Container from '@material-ui/core/Container';

// Portfolio Thumbnails
import maressa from './thumbnails/portfolio_maressa_brown.png';
import emmie from './thumbnails/portfolio_emmie.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    marginTop: '65vh',
    paddingTop: '2em',
    paddingBottom: '4em',
    backgroundColor: '#fdf1eb',
    zIndex: '2'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
    boxShadow: '1px 1px 2px 0px rgba(0,0,0,.1)'
  }
}));

const Portfolio = ({ image, blurb, url }) => {
  const classes = useStyles();

  return (
    <div id='portfolio' className={classes.root}>
      <Container maxWidth='md'>
        <h1 className='section-title'>Portfolio</h1>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <Paper className={classes.paper}>
              <PortfolioItem
                image={maressa}
                blurb='Maressa is a freelance journalist and needed a portfolio website to show off her work. I created her website & logo from scratch and integrated everything into Wordpress so she can update the website herself.'
                url='https://maressabrown.com/'
              />
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper className={classes.paper}>
              <PortfolioItem
                image={emmie}
                blurb='Emaline is a Naturopathic Physician and wanted to a blog to share her knowledge & recipes with others. I created her website & logo from scratch and connected her website to Wordpress.'
                url='http://dremmieb.com/'
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
