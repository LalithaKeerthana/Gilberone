import LeftBanner from "./LeftBanner";
import logo from './vline.png';

import '../style/Banner.css';

const Banner = () => {
  return (
    <section
      
      className="home w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row  border-b-[1px] font-titleFont border-b-gray-700">
      
      <div className="icon-bar">
      <img className="line-image" src={logo} alt="line" />
      <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
      <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
      <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
      <img className="bottomline-image" src={logo} alt="line" />
      <div className="copyright">&copy; Gilber.2020</div>
          </div>
      <LeftBanner />
      
    </section>
  );
};

export default Banner;
