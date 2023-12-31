import './Members.css';

import memberOne from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg';
import memberTwo from '../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg';
import memberThree from '../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg';
import memberFour from '../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg';

import LensIcon from '@mui/icons-material/Lens';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function Members() {
  return (
    <div className="team-container">
      <div className="team-area">
        <div className="row">
          <div className="col-8">
            <p className="team-features">Meet Our Team</p>
            <h1 className="team-header">Expericence Team Members</h1>
          </div>
          <div className="col">
            <button className="team-button">Browse Team <NorthEastIcon className='button-icon'/>  </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={memberOne} alt=""
              className="team-image-item"></img>
            <h2 className="team-header-item">Kristine Palmer</h2>
            <p className="team-paragragh-item">Chef Operation Officer</p>
          </div>
          <div className="col">
            <img src={memberTwo} alt=""
              className="team-image-item"></img>
            <h2 className="team-header-item">Mark Aubri</h2>
            <p className="team-paragragh-item">Operation Officer</p>
          </div>
          <div className="col">
            <img src={memberThree} alt="" className="team-image-item"></img>
            <h2 className="team-header-item">Kimberly Hansen</h2>
            <p className="team-paragragh-item">Senior Consultant</p>
          </div>
          <div className="col">
            <img src={memberFour} alt=""
              className="team-image-item"></img>
            <h2 className="team-header-item">Justin Willoman</h2>
            <p className="team-paragragh-item">Senior Tech Consultant</p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="team-scroll">
            <div className="col">
              <LensIcon />
            </div>
            <div className="col">
              <LensIcon className='special' />
            </div>
            <div className="col">
              <LensIcon />
            </div>
            <div className="col">
              <LensIcon />
            </div>
            <div className="col">
              <LensIcon />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Members;
