import React from 'react';

const SingleTestimonial = ({
  testimonialImage,
  testimonialQuote,
  testimonialTitle,
  testimonialClass
}) => {
  return (
    <div className='single-testimonial' style={{ display: 'flex' }}>
      <div className='testimonial-image-container'>
        <div
          className='testimonial-image'
          style={{
            width: '100px',
            height: '100px',
            overflow: 'hidden',
            borderRadius: '50%',
            marginRight: '2em'
          }}
        >
          <img src={testimonialImage} alt='' class={testimonialClass} />
        </div>{' '}
        {/* testimonial image */}
      </div>{' '}
      {/* testimonial image container */}
      <div
        className='testimonial'
        style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <p className='testimonial-quote'>{testimonialQuote}</p>
        <p className='testimonial-title'>- {testimonialTitle}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
