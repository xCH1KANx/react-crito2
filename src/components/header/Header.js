import './Header.css';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { ReactComponent as ShowCaseImage } from '../../assets/images/showcase-image.svg';

function Header() {
  return (
    <div className="front-container">
      <div className="row max-width">
        <div className="col-7 front-information">
          <h1 className="front-header">We Provide The Best Business
            Solutions</h1>
          <p className="front-text">Establish your vision and value proposition and turn them into testable
            prototypes.</p>
          <button className="front-contact me-3">Get Consulting<NorthEastIcon className='button-icon' /></button>
          <button className="front-learn">Learn More<NorthEastIcon className='button-icon' /></button>
        </div>
        <div className="col-5">
          <img src="./assets/images/showcase-image.svg" alt=""></img>
          <ShowCaseImage />
        </div>
      </div>
    </div>
  );
}

export default Header;
