import './ChooseUs.css';

import StarHalfIcon from '@mui/icons-material/StarHalf';
import chooseUs from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg';

function ChooseUs() {
  return (
    <div className="choose-container">
      <div className="row choose-row">
        <div className="row">
          <p className="choose-feature">Why Choose Us</p>
          <h1 className="choose-header">Why We Are The Best Business Consulting Agency.</h1>
        </div>
        <div className="col">
          <div className="row row-item">
            <div className="col-1 item-icon"><StarHalfIcon className='item-icon-design'/></div>
            <div className="col">
              <h2 className="item-header">Process Excellence</h2>
              <h2 className="item-paragraph">Lorem, ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <div className="row row-item">
            <div className="col-1 item-icon"><StarHalfIcon className='item-icon-design'/></div>
            <div className="col">
              <h2 className="item-header">Process Excellence</h2>
              <h2 className="item-paragraph">Lorem, ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <div className="row row-item">
            <div className="col-1 item-icon"><StarHalfIcon className='item-icon-design'/></div>
            <div className="col">
              <h2 className="item-header">Process Excellence</h2>
              <h2 className="item-paragraph">Lorem, ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <div className="row row-item">
            <div className="col-1 item-icon"><StarHalfIcon className='item-icon-design'/></div>
            <div className="col">
              <h2 className="item-header">Process Excellence</h2>
              <h2 className="item-paragraph">Lorem, ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
        </div>
        <div className="col choose-background">
          <img src={chooseUs} alt="" className="choose-image"></img>
        </div>
      </div>
    </div>

  );
}

export default ChooseUs;
