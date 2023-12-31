import './Footer.css';

import { ReactComponent as Logotype } from '../../assets/images/logotype-white.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
    return (
        <footer className='footer text-white'>
            <div className='footer-container'>
                <div className='row footer-box'>
                    <div className='col-4'>
                        <Logotype className='logotype' />
                        <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                    <div className='col'>
                        <h5 className='footer-big'>Company</h5>
                        <a className='footer-links'>About</a>
                        <a className='footer-links'>Features</a>
                        <a className='footer-links'>Works</a>
                        <a className='footer-links'>Carrer</a>
                    </div>
                    <div className='col'>
                        <h5 className='footer-big'>Help</h5>
                        <a className='footer-links'>Customer Support</a>
                        <a className='footer-links'>Delivery Details</a>
                        <a className='footer-links'>Terms & Conditions</a>
                        <a className='footer-links'>Privacy Policy</a>
                    </div>
                    <div className='col'>
                        <h5 className='footer-big'>Resources</h5>
                        <a className='footer-links'>Free eBooks</a>
                        <a className='footer-links'>Development Tutorial</a>
                        <a className='footer-links'>How to - Blog</a>
                        <a className='footer-links'>Youtube Playlist</a>
                    </div>
                    <div className='col'>
                        <h5 className='footer-big'>Link</h5>
                        <a className='footer-links'>Free eBooks</a>
                        <a className='footer-links'>Development Tutorial</a>
                        <a className='footer-links'>How to - Blog</a>
                        <a className='footer-links'>Youtube Playlist</a>
                    </div>
                </div>
                <hr className='footer-line' />
                <div className='row mt-4 pb-4'>
                    <div className='col'>
                        <p className='footer-bottom-text'>2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                    </div>
                    <div className='col'>
                        <div className='footer-icons'>
                            <InstagramIcon className='footer-icon' />
                            <TwitterIcon className='footer-icon' />
                            <LinkedInIcon className='footer-icon' />
                            <FacebookIcon className='footer-icon' />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;


