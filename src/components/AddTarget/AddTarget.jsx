import AddTargetForm from "../AddTargetForm/AddTargetForm";

const AddTarget = () => {
  const addingBounty = false;

  return (
    <section>
      <button type="button" className={addingBounty ? 'hide' : 'show'}>Añadir recompensa</button>
      <AddTargetForm opened={addingBounty} />
    </section>
  );
}

export default AddTarget;