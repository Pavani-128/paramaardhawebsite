import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-section">
            <div className="copy-rights">
                <img src="" alt="logo" />
                <p>CopyRights &copy; 2025 By Paramaardha. All Right Reserved.</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Events</Link></li>
                    <li><Link>Pandits</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div className="social-links">
                 <ul>
                    <li><Link to={'https://www.instagram.com/paramaardha/'}><FaInstagram /></Link></li>
                    <li><Link to={'https://www.facebook.com/profile.php?id=61573820807166'}><FaFacebook /></Link></li>
                    <li><Link to={'https://youtube.com/@paramaardha?si=p0J8pwiKvQeuFfLS'}><FaYoutube /></Link></li>
                    <li><Link to={'https://x.com/paramaardha?t=eYnzGe2q8O5XUJMgu3xjsA&s=08'}><FaXTwitter /></Link></li>
                    <li><Link to={'https://www.linkedin.com/in/paramaardha-pandit-48953b356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><FaLinkedin /></Link></li>
                    <li><Link to={'mailto:Help.paramaardha@gmail.com'}><MdEmail /> </Link></li>
                 </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
