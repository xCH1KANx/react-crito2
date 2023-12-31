import './Features.css';

import DashboardIcon from '@mui/icons-material/Dashboard';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function Features() {
  return (
    <div className="features">
      <div className="features-container">
        <div className="row features-row">
          <div className="col features-info">
            <p className="feature-info">Features</p>
            <h1 className="feature-header">Our Accounting is
              trusted by thousand
              of companies.</h1>
            <button className="feature-button">Learn More <NorthEastIcon className='button-icon'/></button>
          </div>
          <div className="col">
            <div className="row feature-item-row">
              <div className="col">
                <DashboardIcon className='largeIcon'/>
                <h2 className="feature-item-h">Business Advice</h2>
                <p className="feature-item-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col">
                <DashboardIcon className='largeIcon'/>
                <h2 className="feature-item-h">Business Advice</h2>
                <p className="feature-item-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="row feature-item-row">
              <div className="col">
                <DashboardIcon className='largeIcon'/>
                <h2 className="feature-item-h">Business Advice</h2>
                <p className="feature-item-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="col">
                <DashboardIcon className='largeIcon'/>
                <h2 className="feature-item-h">Business Advice</h2>
                <p className="feature-item-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
