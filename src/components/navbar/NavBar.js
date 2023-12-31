import './NavBar.css';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { ReactComponent as Logo } from '../../assets/images/logotype.svg';

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="row">
          <div className="col-2">
            <Logo className='logo'/>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-9 d-flex">
                <p className="nav-info"><LocalPhoneIcon className='symbols'/>+46 (8) 121 470 50</p>
                <MoreVertIcon className='symbols'/>
                <p className="nav-info"><MailIcon className='symbols'/>info@crito.com</p>
                <MoreVertIcon className='symbols'/>
                <p className="nav-info"><LocationOnIcon className='symbols'/>Sveavägen 31, 111 34 Stockholm</p>
              </div>
              <div className="col-3 d-flex">
                <FacebookIcon className='icon'/>
                <TwitterIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <LinkedInIcon className='icon'/>
              </div>
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-9 d-flex">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Service</a>
                <a href="#" className="nav-link">News</a>
                <a href="#" className="nav-link">Contact</a>
              </div>
              <div className="col-3">
                <button className="header-button">Login<NorthEastIcon className='button-icon'/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
