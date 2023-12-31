import './AboutUs.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import aboutImage from '../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="row about-row">
        <div className="col about-one">
          <img src={aboutImage} alt="" className="about-image"></img>
          <div className="about-image-container">
            <h1 className="image-header">Samantha Brown, <span className="image-text">Founder</span></h1>
            <p className="image-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
        </div>
        <div className="col about-two">
          <p className="about-feature">About the company</p>
          <h1 className="about-header">We Are Business Consulting & Credit Repair Experts.</h1>
          <p className="about-paragraph mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officiis
            quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br></br><br></br>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
            accusantium libero provident voluptate amet.</p>
          <button className="about-button me-5">Learn More <NorthEastIcon className='button-icon'/></button>
          <button className="about-outline-button"><PlayArrowIcon className='transparent-icon' /></button><span className="about-video ms-3">Intro Video</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
