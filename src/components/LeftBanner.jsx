import { useState } from 'react';
import { FadeIn } from "./FadeIn";
import playIcon from "./play_icon.png"; 
import '../style/LeftBanner.css';


const LeftBanner = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setVideoPlaying(true);
  };

  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20 ml-30 app">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal"></h4>
      </div>
      <div className="relative">
        {!isVideoPlaying && (
          <img 
            src={playIcon} 
            alt="Play" 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              cursor: 'pointer',
              zIndex: 1 
            }} 
            onClick={handlePlayClick} 
          />
        )}
        
        <div className={`video-container ${isVideoPlaying ? 'visible' : 'hidden'}`}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/EoQgxSkR6qg?autoplay=1" 
            title="YouTube video player" 
          
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        
          ></iframe>
        </div>
      </div>

      <div>
        <h2 className="text-base font-title Font text-white product" style={{ fontSize: '2.5rem', fontFamily: 'Calibri', position: 'relative', zIndex: 2 }}>
          Product Designer
        </h2>
        <br/><br/><br/><br/><br/><br/>
        <h2 className="text-base font-title Font mt-5 text-white text-lg product" style={{ fontSize: '15rem', fontFamily: 'Calibri' }}>
          <b>Gilber</b><span className="dot">.</span>
        </h2>
        <br/><br/><br/><br/><br/><br/>
        <p className="text-base font-title Font text-white product" style={{ fontSize: '2rem', fontFamily: 'Calibri', letterSpacing: '0.5px', lineHeight: '1.5', color: '#ccc' }}>
          Working with clients and the community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage.
        </p>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
