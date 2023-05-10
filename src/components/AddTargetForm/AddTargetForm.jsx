import { useState } from "react";

const AddTargetForm = ({dataAdding, addBounty}) => {
  const [name, setName] = useState('');
  const [state, setState] = useState('alive');
  const [bounty, setBounty] = useState('');

  const handleName = (event) => setName(event.target.value);
  const handleState = (event) => setState(event.target.value);
  const handleBounty = (event) => setBounty(event.target.value);

  const publishBounty = () => {
    addBounty({name, state, bounty});
    dataAdding.setAddingBounty(false);
  };

  return (
    <div>
      <div>
        <label>Nombre:</label>
        <input type="text" onChange={handleName} placeholder="Indique el nombre del objetivo" />
      </div>
      <div>
        <label>Estado:</label>
        <select onChange={handleState}>
          <option value="alive">Vivo</option>
          <option value="downed">Eliminado</option>
        </select>
      </div>
      <div>
        <label>Recompensa:</label>
        <input type="text" onChange={handleBounty} placeholder="Indique la recompensa"></input>
      </div>
      <button type="button" onClick={publishBounty}>Publicar</button>
    </div>
  )
}

export default AddTargetForm;