import { useEffect, useState } from "react";
import Menu from "../utils/Menu";
import Theme from "../utils/Theme";

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
    <header className="header section_padding">
      <div className="fixedHeader">
        <h1>Logo</h1>
        {computerScreen ?
          <Theme></Theme> :
          <img
            onClick={toggleMenu}
            src={require("../Icons&Images/menu.png")}
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