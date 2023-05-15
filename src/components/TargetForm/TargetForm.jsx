import { useState } from "react";

import "./TargetForm.css";

const TargetForm = ({bounty, dataSetting, dataMethods}) => {
  const [name, setName] = useState(bounty.name);
  const [state, setState] = useState(bounty.state);
  const [reward, setReward] = useState(bounty.reward);

  const handleName = (event) => setName(event.target.value);
  const handleState = (event) => setState(event.target.value);
  const handleReward = (event) => setReward(event.target.value);

  const publishBounty = () => {
    dataMethods.addBounty({name, state, reward});
    dataSetting.setSettingBounty(false);
  };

  return (
    <div className="addTargetForm">
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