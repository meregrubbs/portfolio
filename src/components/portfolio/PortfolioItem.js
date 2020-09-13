import React from 'react';
import ThumbnailPopover from './ThumbnailPopover.js';
import PropTypes from 'prop-types';

const PortfolioItem = ({ image, blurb, url }) => {
  return (
    <div>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='portfolio-item-link'
      >
        <img src={image} alt='' style={{ maxWidth: '100%' }} />
      </a>

      <ThumbnailPopover blurb={blurb} />
    </div>
  );
};

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PortfolioItem;
