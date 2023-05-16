import { useState } from "react";

import "./Targets.css";
import TargetsList from "../TargetsList/TargetsList";
import EditTarget from "../EditTarget/EditTarget";

const Targets = () => {

  const [settingBounty, setSettingBounty] = useState(false);
  const [currentBounty, setCurrentBounty] = useState({});

  return (
    <section className="Targets">
      {
        settingBounty ? 
          <EditTarget dataSetting={{settingBounty, setSettingBounty} } dataBounty={{currentBounty, setCurrentBounty}} /> 
          :
          <TargetsList />
      }
    </section>
  );
}

export default Targets; 