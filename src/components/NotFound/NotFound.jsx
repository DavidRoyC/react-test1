import { useContext } from "react"
import { Link } from "react-router-dom"

import ThemeContext from "../../contexts/ThemeContext"

import './NotFound.css';

const NotFound = () => {
  let theme = useContext(ThemeContext);

  return (
    <div className={`notFound ${theme.darkmode? 'dark' : 'light'}`}>
      <p>En ocasiones está bien salirse del camino, pero esta no es una de ellas...</p>
      <Link to="/" className="linkTo">Vamos a un sitio conocido</Link>
    </div>
  )
}

export default NotFound;