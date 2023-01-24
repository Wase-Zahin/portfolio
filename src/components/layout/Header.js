import { useEffect, useState } from "react";
import Menu from "../utils/Menu";
import Theme from "../utils/Theme";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [computerScreen, setComputerScreen] = useState(true);

  const [displayMenu, setDisplayMenu] = useState(false);

  const setDisplay = () => {
    if (displayMenu === false) setDisplayMenu(true)
    else if (displayMenu === true) setDisplayMenu(false)
  }

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
      if (width >= 768) {
        setComputerScreen(true);
      }
      else setComputerScreen(false);
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

  return (
    <div className="headerWrapper">
      <header>
        <h1>Logo</h1>
        {computerScreen ?
          (<Theme></Theme>) : 
          (<Menu setDisplay={setDisplay} displayMenu={displayMenu}></Menu>)}
      </header>
    </div>
  )
}

export default Header;