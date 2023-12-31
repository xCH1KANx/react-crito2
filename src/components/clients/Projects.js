import './Projects.css';
import projectOne from '../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg';
import projectTwo from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg';
import projectThree from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg';
import projectFour from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg';

import NorthEastIcon from '@mui/icons-material/NorthEast';

function Projects() {
  return (
    <div className="studies-container">
    <div className="studies-area">
        <p className="studies-features">Project & Case Studies</p>
        <h1 className="studies-header">Let's Looks Our Global Projects</h1>

        <div className="row">
            <div className="col">
                <img src={projectOne} alt="" className="studies-item-image"></img>
                <h2 className="studies-item-header mt-5">Grow your Business</h2>
                <hr className="studies-item-line"></hr>
                <div className="row justify-content-end">
                    <button className="studies-item-button">Read More <NorthEastIcon className='button-icon'/></button>
                </div>
            </div>
            <div className="col">
                <img src={projectTwo} alt="" className="studies-item-image"></img>
                <h2 className="studies-item-header mt-5">Grow your Business</h2>
                <hr className="studies-item-line"></hr>
                <div className="row justify-content-end">
                    <button className="studies-item-button">Read More <NorthEastIcon className='button-icon'/></button>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col">
                <img src={projectThree} alt="" className="studies-item-image"></img>
                <h2 className="studies-item-header mt-5">Grow your Business</h2>
                <hr className="studies-item-line"></hr>
                <div className="row justify-content-end">
                    <button className="studies-item-button">Read More <NorthEastIcon className='button-icon'/></button>
                </div>
            </div>
            <div className="col">
                <img src={projectFour} alt="" className="studies-item-image"></img>
                <h2 className="studies-item-header mt-5">Grow your Business</h2>
                <hr className="studies-item-line"></hr>
                <div className="row justify-content-end">
                    <button className="studies-item-button">Read More <NorthEastIcon className='button-icon'/></button>
                </div>
            </div>
        </div>

        <div className="row justify-content-center mt-5">
            <button className="studies-button">All Recent Projects <NorthEastIcon className='button-icon'/></button>
        </div>
    </div>
</div>
  );
}

export default Projects;
