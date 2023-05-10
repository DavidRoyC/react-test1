import "./TargetsList.css";

import TargetCard from "../TargetCard/TargetCard";

const TargetsList = ({targets}) => {
  return (
      <dl>
        { 
          targets.map((target, index) => <TargetCard target={target} key={index} />)
        }
      </dl>
  );
}

export default TargetsList;