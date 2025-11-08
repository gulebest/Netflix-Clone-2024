import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import netflixLogo from "../../assets/images/Netflix-logo.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const controlHeader = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScroll > 50);
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // Close dropdown if click outside or press Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Keyboard accessibility: toggle on Enter or Space on button
  const onKeyDownToggle = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <div
      className={`Header_outer_container ${isScrolled ? "Header_scrolled" : ""} ${
        isVisible ? "Header_show" : "Header_hide"
      }`}
    >
      <div className="header_container">
        <div className="header_left">
          <img src={netflixLogo} alt="Netflix Logo" className="logo" />
          
          {/* Nav links with ref for outside click */}
          <ul
            ref={dropdownRef}
            className={`nav_links ${dropdownOpen ? "dropdown_active" : ""}`}
            role="menu"
            aria-label="Primary navigation"
          >
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>Home</li>
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>TV Shows</li>
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>Movies</li>
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>Latest</li>
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>MyList</li>
            <li role="menuitem" tabIndex={dropdownOpen ? 0 : -1}>Browse by Language</li>
          </ul>

          {/* Dropdown toggle button */}
          <button
            className="dropdown_toggle"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-controls="primary-navigation"
            onKeyDown={onKeyDownToggle}
            ref={toggleButtonRef}
          >
            Browse <ArrowDropDownIcon />
          </button>
        </div>

        <div className="header_right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
