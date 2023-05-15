import { useState } from "react";

import "./Targets.css";
import TargetsList from "../TargetsList/TargetsList";
import EditTarget from "../EditTarget/EditTarget";


const Targets = ({dataTargets}) => {
  const [settingBounty, setSettingBounty] = useState(false);
  const [currentBounty, setCurrentBounty] = useState({});

  return (
    <section className="Targets">
      {
        settingBounty ? 
          <EditTarget dataTargets={dataTargets} dataSetting={{settingBounty, setSettingBounty} } dataBounty={{currentBounty, setCurrentBounty}} /> 
          :
          <TargetsList dataTargets={dataTargets} dataSetting={{settingBounty, setSettingBounty}} dataBounty={{currentBounty, setCurrentBounty}} />
      }
    </section>
  );
}

export default Targets; 