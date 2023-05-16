import { useState, useContext } from "react";
import PublicTargets from "../../contexts/PublicTargets";

import "./TargetsList.css";
import TargetCard from "../TargetCard/TargetCard";
import SearchBar from "../SearchBar/SearchBar";

const TargetsList = () => {
  const dataTargets = useContext(PublicTargets);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <ul className="targetsList">
      {
        dataTargets.targets
          .filter(target => target.name.toLowerCase().includes(filter.toLowerCase()))
          .map((target, index) => <TargetCard target={target} key={index} />)
      }
      </ul>
      <SearchBar dataFilter={{filter, setFilter}} />
    </div>
  );
}

export default TargetsList;