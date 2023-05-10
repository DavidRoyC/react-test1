import AddTargetForm from "../AddTargetForm/AddTargetForm";

const AddTarget = ({dataAdding, addBounty}) => {
  const toggleForm = () => dataAdding.setAddingBounty(true);

  return (
    <section>
      {
        dataAdding.addingBounty ? 
        <AddTargetForm dataAdding={dataAdding} addBounty={addBounty} /> :
        <button type="button" onClick={toggleForm}>Añadir recompensa</button>
      }
      
    </section>
  );
}

export default AddTarget;