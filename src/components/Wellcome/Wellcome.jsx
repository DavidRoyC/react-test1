import { useContext } from "react"

import ThemeContext from "../../contexts/ThemeContext"

import './Wellcome.css';

const Wellcome = () => {
  let theme = useContext(ThemeContext);

  return (
    <div className={`wellcome ${theme.darkmode? 'dark' : 'light'}`}>
      <p>Para aquellos considerados guerreros: cuando entablas combate, el triunfo sobre tu enemigo puede ser la única preocupación. Domina toda compasión y emoción humana. Mata a quienquiera que esté en tu camino, aún si es Dios o el mismo Buda. Esta verdad se halla en el corazón del arte del combate.</p>
    </div>
  )
}

export default Wellcome;