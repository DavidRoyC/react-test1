import "./Targets.css";
import TargetsList from "../TargetsList/TargetsList";
import AddTarget from "../AddTarget/AddTarget";
import { useState } from "react";

const Targets = ({dataTargets}) => {
  const [addingBounty, setAddingBounty] = useState(false);

  const addBounty = (target) => dataTargets.setTargets([...dataTargets.targets, target]);

  return (
    <section>
      {
        addingBounty ? <div></div> : <TargetsList targets={dataTargets.targets} />
      }

      <AddTarget dataAdding={{addingBounty, setAddingBounty} } addBounty={addBounty} />
    </section>
  );
}

export default Targets; 