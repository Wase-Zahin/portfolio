import { useEffect, useState } from "react";
import Menu from "../../utils/Menu";
import Theme from "../../utils/Theme/Theme";
import { Link } from 'react-scroll';
import './Header.css';
import { logo } from "../../../assets";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [computerScreen, setComputerScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleScroll = () => {
    const rotationAngle = window.scrollY * 0.2; // adjust the rotation speed as desired
    setRotation(rotationAngle);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const header = document.querySelector('.header');

    if (menuOpen) {
      header.classList.remove('on');
    }
    else header.classList.add('on');
  }

  useEffect(() => {
    const handleResizeWindow = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
      console.log(currentWidth);

      if (currentWidth >= 768) {
        setComputerScreen(true);
        setMenuOpen(false);
      }
      else if (currentWidth < 768) setComputerScreen(false);
    };
    //run function on mount
    handleResizeWindow();
    // run function on dependecy changes
    window.addEventListener("resize", handleResizeWindow);
    // remove eventlistener on unmount
    console.log(computerScreen);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);

  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    const header = document.querySelector('.header');

    const closeMenu = () => {
      setMenuOpen(false);
      overlay.style.display = "none";
      header.classList.remove('on');
    };

    if (menuOpen) {
      overlay.style.display = "block";
      overlay.addEventListener("click", closeMenu);
    } else {
      overlay.style.display = "none";
      overlay.removeEventListener("click", closeMenu);
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="section_container section_padding">
        <div className="fixedHeader">
          {/* <h1>Z</h1> */}
          <img className="myname" src={logo} alt="Logo" style={{ transform: `rotate(${rotation}deg)` }}></img>
          {computerScreen ?
            <nav className="nav">
              <ul className="nav">
                <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link></li>
                <li><Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link></li>
              </ul>
              <Theme></Theme>
            </nav>
            :
            <img
              className="menuIcon"
              onClick={toggleMenu}
              src={require("../../Icons&Images/menu.png")}
              alt="menu">
            </img>}
        </div>
        <div>
          <Menu items={
            [
              <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">About</Link>,
              <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</Link>,
              <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link>
            ]}
            menuOpen={menuOpen}></Menu>
        </div>
      </div>
    </header>
  )
}

export default Header;