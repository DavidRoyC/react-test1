import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

import './Header.css';

const Header = ({ subtitle, setTheme }) => {
  let theme = useContext(ThemeContext);

  const toggleTheme = () => {
    let change = {
      darkmode: !theme.darkmode,
      icon: theme.darkmode ? 'dark_mode' : 'light_mode'
    }
    setTheme(change);
  }

  return (
    <header className={`App-header ${theme.darkmode? 'dark' : 'light'}`}>
      <div className="options">
        <button type="button" onClick={toggleTheme}><span className="mi-outlined">{theme.icon}</span></button>
      </div> 
      <div className="titleBlock">
        <h1>Bride's target list</h1>
        {
          subtitle.length > 0 && <h2>{subtitle}</h2>
        }
      </div>
    </header>
  )
}

export default Header;