import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../../contexts/ThemeContext";

import "./TargetCard.css";

const TargetCard = ({target}) => {
  let theme = useContext(ThemeContext);

  return (<li className={`Target ${target.state} ${theme.darkmode? 'dark' : 'light'}`}>
            <div className="action"><button onClick={() => {}}><span className="mi-outlined">edit</span></button></div>
            <div className="action"><button onClick={() => {}}><span className="mi-outlined">delete</span></button></div>
            <div><Link to={`/target/${target.id}`} className="name">{target.name}</Link></div>
          </li>);
}
export default TargetCard;