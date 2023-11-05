import React from 'react';
import "../css/footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxIcon from '@mui/icons-material/Inbox';

function Footer() {
    return (
        <footer className="footer-area">
            <div className="footer-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <p>
                                Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!
                            </p>
                            <ul className="social-link">
                                <li>
                                    <a href="https://www.facebook.com/brainlox/" className="d-block" target="_blank" rel="noreferrer">
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/brainlox" className="d-block" target="_blank" rel="noreferrer">
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/brainloxed/" className="d-block" target="_blank" rel="noreferrer">
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/brainlox/" className="d-block" target="_blank" rel="noreferrer">
                                        <LinkedInIcon />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCzTWxSKEXsRtWyEHkrWxiEg" className="d-block" target="_blank" rel="noreferrer">
                                        <YouTubeIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <LocationOnOutlinedIcon />
                                    USA
                                </li>
                                <li>
                                    <PhoneInTalkOutlinedIcon />
                                    <a href="tel:+44587154756">(+1) 414 429 3937</a>
                                </li>
                                <li>
                                    <EmailOutlinedIcon />
                                    <a href="mailto:support@brainlox.com">support@brainlox.com</a>
                                </li>
                                <li>
                                    <InboxIcon />
                                    <a href="tel:+557854578964">(+1) 414 429 3937</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                <CopyrightIcon fontSize='small'/>2022 Brainlox
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <div 
                                        style={{
                                            content: "",
                                            position: "absolute",
                                            right: "-12px",
                                            top: "5.5px",
                                            width: "1px",
                                            height: "14px",
                                            backgroundColor: "#ededed"
                                        }}
                                    />
                                    <a href="https://brainlox.com/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://brainlox.com/terms-of-service">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;