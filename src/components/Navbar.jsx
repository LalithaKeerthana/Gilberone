import '../style/navbar.css';
import  { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        <span>Gilber <span className="red-dot">.</span></span>
      </div>
      <div className="right">
        <div className="menu-icon" onClick={toggleSidebar}>&#9776;</div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="language">ENG</span>
          <span className="language">FRA</span>
          <span className="language">GER</span>
          <button className="close-button" onClick={toggleSidebar}>X</button>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#more">More</a></li>
          <li><a href="#even-more">Even More</a></li>
        </ul>
        <div className="sidebar-footer">
          <div className="social-icons">
            <a href="#" className="social-icon fb"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social-icon tw"><i className="fa fa-twitter"></i></a>
            <a href="#" className="social-icon ig"><i className="fa fa-instagram"></i></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
