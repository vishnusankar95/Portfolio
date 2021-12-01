import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import {Link} from "react-router-dom";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div>
        <div className="main">        
               <div className="cont">
                   <Link className = "button" to ="/">Home</Link>
                   <Link className = "button" to ="/intro">About</Link>
                   <Link className = "button" to ="/skills">Skills</Link>
                   <Link className = "button" to ="/project">Project</Link>
                   <Link className = "button" to ="/contact">Contact</Link>
               </div>
       </div> 

      <div className="t">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div
          className="t-button"
          onClick={handleClick}
          style={{ left: theme.state.darkMode ? 0 : 25 }}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
