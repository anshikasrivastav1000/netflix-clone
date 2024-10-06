import React from 'react'
import youtude_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={youtude_icon} alt="Youtube" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
        <li>Audio Descripition</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Prefernces</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>

      </ul>
      <div className="copyright-text">@ 1997-2023 Netflix,Inc.</div>
    </div>
  )
}

export default Footer