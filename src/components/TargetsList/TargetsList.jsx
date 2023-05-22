import { useState, useContext } from "react";

import PublicTargets from "../../contexts/PublicTargets";
import ThemeContext from "../../contexts/ThemeContext";

import "./TargetsList.css";
import TargetCard from "../TargetCard/TargetCard";
import SearchBar from "../SearchBar/SearchBar";

const TargetsList = () => {
  let theme = useContext(ThemeContext);
  const {targets, loadingTargets, errorTargets} = useContext(PublicTargets);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <ul className={`targetsList ${theme.darkmode? 'dark' : 'light'}`}>
        {
          errorTargets && <div>Error cargando objetivos</div>
          // <ErrorCard at={'Objetivos'} />
        }
        {
          !errorTargets && loadingTargets && <div>Cargando objetivos, espere un momento</div>
          // <LoadingCard at={'Objetivos'} />
        }
        {
          !errorTargets && !loadingTargets &&
          targets
            .filter(target => target.name.toLowerCase().includes(filter.toLowerCase()))
            .map((target, index) => <TargetCard target={target} key={index} />)
        }
        <li className={'Target'}>
            <div className="action">
              <button onClick={() => {}} className="newTarget">
                <span className="mi-outlined">add</span>
                <span className="name">Añadir nuevo objetivo</span>
              </button>
            </div>
          </li>
      </ul>
      <SearchBar dataFilter={{filter, setFilter}} />
    </div>
  );
}

export default TargetsList;