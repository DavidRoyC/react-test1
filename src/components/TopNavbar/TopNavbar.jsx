import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../../contexts/ThemeContext";

import './TopNavbar.css';

const TopNavbar = ({ subtitle, setTheme }) => {
  let theme = useContext(ThemeContext);

  return (
    <nav className={`topNavbar ${theme.darkmode? 'dark' : 'light'}`}>
      <Link to="/" className="nav-item">Inicio</Link>
      <Link to="targets" className="nav-item">Objetivos</Link>
    </nav>
  )
}

export default TopNavbar;