import React from 'react'
import "./Header.css";
import netflixLogo from "../../assets/images/Netflix-logo.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='Header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
          <li><img src={netflixLogo} alt="Netflix Logo" width={100} /></li>

          <li>Home</li>
          <li>TVshows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>Mylist</li>
          <li>Browse by Language</li>
          </ul>

        </div>
        <div className='header_right'>
          <ul>
           
           <li><SearchIcon/></li>
            
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
            
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Header