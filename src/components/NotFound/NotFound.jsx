import { useContext } from "react"
import { Link } from "react-router-dom"

import ThemeContext from "../../contexts/ThemeContext"

import './NotFound.css';

const NotFound = () => {
  let theme = useContext(ThemeContext);

  return (
    <div className="notFound">
      <p>En ocasiones está bien salirse del camino, pero esta no es una de ellas...</p>
      <span className="linkTo"><Link to="/">Vamos a un sitio conocido</Link></span>
    </div>
  )
}

export default NotFound;