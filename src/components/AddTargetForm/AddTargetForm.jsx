
const AddTargetForm = ({opened}) => {
  return (
    <form className={opened ? 'show' : 'hide'}>
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Indique el nombre del objetivo"></input>
      </div>
      <div>
        <label for="name">Estado:</label>
        <input type="text" id="state" name="state" placeholder="Indique el nombre del objetivo"></input>
      </div>
      <div>
        <label for="bounty">Recompensa:</label>
        <input type="text" id="bounty" name="bounty" placeholder="Indique la recompensa"></input>
      </div>
      <input type="submit" value="Publicar"></input>
    </form>
  )
}

export default AddTargetForm;