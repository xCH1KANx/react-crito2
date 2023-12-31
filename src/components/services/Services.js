import './Services.css';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function Services() {
  return (
    <div className="services-container">
      <div className="row services-row">
        <div className="row">
          <p className="services-feature">Our Services</p>
          <h1 className="services-header">We Provide The Best Service For Consulting.</h1>
        </div>
        <div className="col">
          <div className="services-card">
            <hr className="services-line"></hr>
            <h1 className="services-card-header">Business Advice</h1>
            <p className="services-card-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.</p>
            <div className="row justify-content-end">
              <button className="services-button"><ArrowForwardIcon className='button-icon'/></button>
            </div>

          </div>
        </div>
        <div className="col">
          <div className="services-card special">
            <hr className="services-line"></hr>
            <h1 className="services-card-header">Business Advice</h1>
            <p className="services-card-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.</p>
            <div className="row justify-content-end">
              <button className="services-button special-button"><ArrowForwardIcon className='button-icon'/></button>
            </div>

          </div>
        </div>
        <div className="col">
          <div className="services-card">
            <hr className="services-line"></hr>
            <h1 className="services-card-header">Business Advice</h1>
            <p className="services-card-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.</p>
            <div className="row justify-content-end">
              <button className="services-button"><ArrowForwardIcon className='button-icon'/></button>
            </div>

          </div>
        </div>
        <div className="col">
          <div className="services-card">
            <hr className="services-line"></hr>
            <h1 className="services-card-header">Business Advice</h1>
            <p className="services-card-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus.</p>
            <div className="row justify-content-end">
              <button className="services-button"><ArrowForwardIcon className='button-icon'/></button>
            </div>

          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <button className="services-learn-button">Browse Services <NorthEastIcon className='button-icon'/></button>
      </div>
    </div>
  );
}

export default Services;
