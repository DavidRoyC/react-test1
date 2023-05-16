import { useState, useContext } from "react";
import PublicTargets from "../../contexts/PublicTargets";

import "./TargetForm.css";

const TargetForm = ({bounty, dataSetting, dataMethods}) => {
  const dataTargets = useContext(PublicTargets);

  const [name, setName] = useState(bounty.name);
  const [state, setState] = useState(bounty.state);
  const [reward, setReward] = useState(bounty.reward);

  const handleName = (event) => setName(event.target.value);
  const handleState = (event) => setState(event.target.value);
  const handleReward = (event) => setReward(event.target.value);

  const addBounty = (bounty) => {
    bounty.id = dataTargets.targets.reduce((max, target) => Math.max(max, target.id), 0) + 1;
    dataTargets.setTargets([...dataTargets.targets, bounty])
  };
  const editBounty = (bounty) => {
    let index = dataTargets.targets.findIndex(target => target.id === bounty.id);
    let tempTargets = [...dataTargets.targets];

    tempTargets[index] = bounty;
    dataTargets.setTargets(tempTargets);
  }

  const publishBounty = () => {
    dataMethods.addBounty({name, state, reward});
    dataSetting.setSettingBounty(false);
  };

  return (
    <div className="targetForm">
      <div className="fieldBlock">
        <label>Nombre:</label>
        <input type="text" onChange={handleName} placeholder="Indique el nombre del objetivo" />
      </div>
      <div className="fieldBlock">
        <label>Estado:</label>
        <select onChange={handleState}>
          <option value="alive">Vivo</option>
          <option value="downed">Eliminado</option>
        </select>
      </div>
      <div className="fieldBlock">
        <label>Recompensa:</label>
        <input type="text" onChange={handleReward} placeholder="Indique la recompensa"></input>
      </div>
      <button type="button" onClick={publishBounty}>Publicar</button>
      <button type="button" onClick={() => {dataSetting.setSettingBounty(false)}}>Cancelar</button>
    </div>
  )
}

export default TargetForm;