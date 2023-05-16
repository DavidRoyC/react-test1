import { useContext } from "react";
import TargetForm from "../TargetForm/TargetForm";
import PublicTargets from "../../contexts/PublicTargets";

const EditTarget = ({dataSetting, dataBounty}) => {
  const dataTargets = useContext(PublicTargets);
  const toggleForm = () => dataSetting.setSettingBounty(true);

  return (
    <section>
      {
        dataSetting.settingBounty ? 
          <TargetForm bounty={dataBounty.currentBounty} dataSetting={dataSetting} /> 
          :
          <button type="button" onClick={toggleForm}>Añadir recompensa</button>
      }
    </section>
  );
}

export default EditTarget;