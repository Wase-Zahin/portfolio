import { useEffect, useState } from "react";
import Menu from "../utils/Menu";
import Theme from "../utils/Theme";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [computerScreen, setComputerScreen] = useState(true);

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
        (<Theme></Theme>) : (<Menu></Menu>)}
      </header>
    </div>
  )
}

export default Header;