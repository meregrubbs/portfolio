import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

const ThumbnailPopover = ({ blurb }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
        style={popoverStyle}
      >
        Learn More
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.typography} style={popoverContentStyle}>
          {blurb}
        </Typography>
      </Popover>
    </div>
  );
};

const popoverStyle = {
  boxShadow: 'none',
  backgroundColor: 'transparent',
  textTransform: 'Capitalize',
  fontFamily: "'DM Sans', sans-serif",
  color: '#c777da',
  marginTop: '1em'
};

const popoverContentStyle = {
  fontFamily: "'DM Sans', sans-serif"
};

ThumbnailPopover.propTypes = {
  blurb: PropTypes.string.isRequired
};

export default ThumbnailPopover;
