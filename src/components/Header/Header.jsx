import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

import './Header.css';

const Header = ({ subtitle, setTheme }) => {
  let theme = useContext(ThemeContext);

  return (
    <header className="App-header">
          <h1>Bride's target list</h1>
          <h2>{subtitle}</h2>
    </header>
  )
}

export default Header;