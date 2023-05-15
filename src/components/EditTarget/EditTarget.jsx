import TargetForm from "../TargetForm/TargetForm";

const EditTarget = ({dataTargets, dataSetting, dataBounty}) => {
  const toggleForm = () => dataSetting.setSettingBounty(true);

  const addBounty = (bounty) => {
    bounty.id = dataTargets.targets.reduce((max, item) => {max = Math.max(max, item.id), 0}) + 1;
    dataTargets.setTargets([...dataTargets.targets, bounty])
  };
  const editBounty = (bounty) => {
    let index = dataTargets.targets.findIndex(target => target.id === bounty.id);
    let tempTargets = [...dataTargets.targets];

    tempTargets[index] = bounty;
    dataTargets.setTargets(tempTargets);
  }

  return (
    <section>
      {
        dataSetting.settingBounty ? 
          <TargetForm bounty={dataBounty.currentBounty} dataSetting={dataSetting} dataMethods={{addBounty, editBounty}} /> 
          :
          <button type="button" onClick={toggleForm}>Añadir recompensa</button>
      }
    </section>
  );
}

export default EditTarget;