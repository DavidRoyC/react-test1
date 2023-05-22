// Action creators (patrón factory)
const actionCreator = (type, payload) => {
  return payload ? { type, payload } : { type };
};

export const getDowned = () => actionCreator("GET_DOWNED");
export const getTargetById = (id) => actionCreator("GET_TARGET_BY_ID", id);
export const addTarget = (newTarget) => actionCreator("ADD_TARGET", newTarget);
export const editTarget = (id, changes) => actionCreator('EDIT_TARGET', {id, changes});

/* Action Creators (ejemplos)
{
  type: "GET_DOWNED"
}

{
  type: "GET_TARGET_BY_ID",
  payload: 3
}

{
  type: "ADD_TARGET",
  payload: {
    name: 'Nurrurururur',
    state: 'alive',
    reward: '10000€'
  }
}
*/



