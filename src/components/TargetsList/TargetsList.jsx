import "./TargetsList.css";

import TargetCard from "../TargetCard/TargetCard";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const TargetsList = ({targets}) => {
  const [filter, setFilter] = useState('');

  return (
      <div>
        { 
          targets.filter(target => target.name.toLowerCase().includes(filter.toLocaleLowerCase())).map((target, index) => <TargetCard target={target} key={index} />)
        }
      <SearchBar dataFilter={{filter, setFilter}} />
      </div>

  );
}

export default TargetsList;