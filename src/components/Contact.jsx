
import '../style/Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="content">
      <div className="contact-info">
  <div className="contact-line">
    <p className="head">Contact</p>
  </div>
  <div className="contact-line">
    <p className="addressmall">You’ll called for yielding male, so lights Stars abundantly, is their.</p>
  </div>
  <div className="contact-line">
    <p className="address">27 Queen St, New York USA</p>
  </div>
  <div className="contact-line">
    <p className="phone">+7 (212) 674-25-10</p>
  </div>
  <div className="contact-line">
    <p className="email">gilber.design@gmail.com</p>
  </div>
</div>


        <div className="contact-form">
       
          <p>Let's grab a coffee and jump on conversation <span className="red-text">chat with me.</span></p>
          <form>
  <div className="form-group">
    <textarea id="name" name="name" className="blank-input" placeholder="Your Name"></textarea>
  </div>
  <div className="form-group">
    <textarea id="email" name="email" className="blank-input" placeholder="Your Email"></textarea>
  </div>
  <div className="form-group">
    <textarea id="message" name="message" className="blank-input" placeholder="Message"></textarea>
  </div>
  <button type="submit">CONTACT ME</button>
</form>



        </div>
      </div>
    </div>
  );
};

export default Contact;
