import { useState } from 'react';
import '../style/TestimonialCarousal.css'; // Import CSS for styling

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const TestimonialCarousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === testimonialsData.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <p className="testimonial-text">{testimonialsData[activeIndex].text}</p>
        <p className="testimonial-name">- {testimonialsData[activeIndex].name}</p>
      </div>
      <div className="controls">
        <button className='onebtn' onClick={handlePrev}>&#10094;</button>
        <button className='twobtn' onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default TestimonialCarousal;
