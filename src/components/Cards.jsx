import  { useState } from 'react';
import cardData from '../data/cardData.json'; 
import '../style/Cards.css'; 

const Cards = () => {
  
  const [isHovered, setIsHovered] = useState(Array(cardData.length).fill(false));


  const handleMouseEnter = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = true;
    setIsHovered(updatedIsHovered);
  };

  const handleMouseLeave = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = false;
    setIsHovered(updatedIsHovered);
  };

  return (
    <div className='head-container'>
         <h1 className="recent-news-heading">Recent News</h1>
    <div className="card-container">
        
      {/* Loop through each card */}
      {cardData.map((card, index) => (
        <div
          className={`card ${isHovered[index] ? 'hovered' : ''}`}
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img
            className="card-img-top img-raised"
            src={card.imageUrl}
            alt={`Open Project ${index + 1}`}
          />
          {/* Show banner content only if the corresponding card is hovered */}
          <div className={`banner-content ${isHovered[index] ? 'visible' : ''}`}>
            <p className="date">{card.date}</p>
            <p className="title">{card.title}</p>
            <p className="description">{card.description}</p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
          <br />
          <a className="mb-2 mt-2 text-center small-xl" href="#">
            Check More Details
          </a>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default Cards;
