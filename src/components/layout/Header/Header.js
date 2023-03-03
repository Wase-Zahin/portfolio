import { useEffect, useState } from "react";
import Menu from "../../utils/Menu";
import Theme from "../../utils/Theme/Theme";
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [computerScreen, setComputerScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
      if (width >= 768) {
        setComputerScreen(true);
        setMenuOpen(false);
      }
      else if (width < 768) setComputerScreen(false);
    };
    //run function on mount
    handleResizeWindow();
    // run function on dependecy changes
    window.addEventListener("resize", handleResizeWindow);
    // remove eventlistener on unmount
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  });

  useEffect(() => {
    const overlay = document.querySelector(".overlay");

    const closeMenu = () => {
      setMenuOpen(false);
      overlay.style.display = "none";
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
    <header className="header section_container">
      <div className="fixedHeader">
        <h1>Z</h1>
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
        <Menu items={["item 1", "item 2", "item 3"]} menuOpen={menuOpen}></Menu>
      </div>
    </header>
  )
}

export default Header;