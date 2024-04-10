import '../style/Testimonial.css'; // Import CSS for styling
import quotationMarkImage from './quote.png'; // Import the image file
import TestimonialCarousal from './TestimonialCarousal';
const Testimonial = () => {
    return (
      <div className="testimonial-container">
        <img
          src={quotationMarkImage}
          alt="quotation mark"
          className="quote-icon"
        />
        <div className="content1">
          <p className="text">
            Creative & dedicated is things that gilber studio brings for your business.
          </p>
        </div>

        <TestimonialCarousal />
     </div>
      
    );
  }
  
  export default Testimonial;