import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            
            <div className="footer-title">
                <h2>Do you want to step in to the <br></br>future before others</h2>
            </div>

            <div className="footer-button">
                <p>Request Early Access</p>
            </div>

            <div className="footer-content">
                
                <div className="one">
                    <h2>GPT-3</h2>
                    <p>Mostafa Elgzaeere, All Rights Reserved</p>
                </div>

                <div className="two">
                    <h2>Links</h2>
                    <ul>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div className="three">
                    <h2>Company</h2>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                </div>
                
                <div className="four">
                    <h2>Get in touch</h2>
                        <ul>
                            <li>Mostafa Elgzaeere</li>
                            <li>01023734243</li>
                            <li>mostafa0sayed1@gmail.com</li>
                        </ul>
                </div>
                
            </div>

            <div className="footer-copyright">© 2023 GPT-3. All rights reserved.</div>
            
        </div>
    );
}

export default Footer;
