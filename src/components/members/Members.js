import "./Members.css";

import memberOne from "../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg";
import memberTwo from "../../assets/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import memberThree from "../../assets/images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg";
import memberFour from "../../assets/images/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg";
import reviewOne from "../../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg";

import LensIcon from "@mui/icons-material/Lens";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import StarIcon from '@mui/icons-material/Star';

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
            <button className="team-button">
              Browse Team <NorthEastIcon className="button-icon" />{" "}
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={memberOne} alt="" className="team-image-item"></img>
            <h2 className="team-header-item">Kristine Palmer</h2>
            <p className="team-paragragh-item">Chef Operation Officer</p>
          </div>
          <div className="col">
            <img src={memberTwo} alt="" className="team-image-item"></img>
            <h2 className="team-header-item">Mark Aubri</h2>
            <p className="team-paragragh-item">Operation Officer</p>
          </div>
          <div className="col">
            <img src={memberThree} alt="" className="team-image-item"></img>
            <h2 className="team-header-item">Kimberly Hansen</h2>
            <p className="team-paragragh-item">Senior Consultant</p>
          </div>
          <div className="col">
            <img src={memberFour} alt="" className="team-image-item"></img>
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
              <LensIcon className="special" />
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

      <div className="testimonials-area">
        <div className="testimonials-header">
          <p className="testimonials-features">Testimonial</p>
          <h1 className="testimonials-header">What Our Client Says</h1>
        </div>

        <div className="row review-area">
          <div className="col text-start">
            <div className="review-stars">
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
            </div>
            <p className="review-parahragh mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."</p>

            <div className="row">
              <div className="col-3">
                <img src={reviewOne} alt="" className="review-image"></img>
              </div>
              <div className="col mt-auto mb-auto">
                <h3 className="review-author">Cassandra Warren</h3>
                <h3 className="review-position">Business Manager, Dorfus</h3>
              </div>
            </div>
          </div>

          <div className="col text-start">
            <div className="review-stars">
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
            </div>
            <p className="review-parahragh mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."</p>

            <div className="row">
              <div className="col-3">
                <img src={reviewOne} alt="" className="review-image"></img>
              </div>
              <div className="col mt-auto mb-auto">
                <h3 className="review-author">Cassandra Warren</h3>
                <h3 className="review-position">Business Manager, Dorfus</h3>
              </div>
            </div>
          </div>

          <div className="col text-start">
            <div className="review-stars">
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
              <StarIcon className="star-color" />
            </div>
            <p className="review-parahragh mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."</p>

            <div className="row">
              <div className="col-3">
                <img src={reviewOne} alt="" className="review-image"></img>
              </div>
              <div className="col mt-auto mb-auto">
                <h3 className="review-author">Cassandra Warren</h3>
                <h3 className="review-position">Business Manager, Dorfus</h3>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-2">
            <button className="studies-button">All Reviews <NorthEastIcon className='button-icon' /></button>
          </div>


        </div>

      </div>
    </div>
  );
}

export default Members;
