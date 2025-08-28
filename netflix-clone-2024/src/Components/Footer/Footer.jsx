import React from 'react'
import "./Footer.css"
import FacebookOutLinedIcon from '@mui/icons-material/FacebookOutLined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
      <FacebookOutLinedIcon/>
      <InstagramIcon/>
      <YouTubeIcon/>
        </div>
<div className='footer_data'>
  <div>
    <ul>
      <li>Audio Description</li>
      <li>Investor Relation</li>
      <li>Legal Notice</li>
    </ul>
    </div> 
    <div>
      <ul>
        <li>Help Center</li>
        <li>Jops</li>
        <li>Cookie Preferences</li>
      </ul>
    </div>
<div>
  <ul>
    <li>Gift Cards</li>
    <li>terms of Use</li>
    <li>Corporate Information</li>
  </ul>
</div>
<div>
  <ul>
    <li>Media center</li>
     <li>Privacy</li>
      <li>Contact Us</li>
  </ul>
</div>
</div>
<div className='service_code'>
<p>
Service Code
</p>
</div>
<div className='copy_write'>
&copy; 1997-2025 Netflix, Inc.
</div>
      </div>


    </div>
  )
}

export default Footer;