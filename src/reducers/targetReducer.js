// Reductores
const targetReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DOWNED':
      return state.filter(target => target.state === 'downed');
      break;
    case 'GET_TARGET':
      return state.filter(target => target.id === action.payload);
      break;
    case 'ADD_TARGET':
      let nextId = parseInt(state.reduce((max, target) => Math.max(max, target.id), 0)) + 1;
      return [...state, {id: nextId, ...action.payload}];
      break;
    case 'EDIT_TARGET':
      let index = state.findIndex(target => target.id === action.payload.id);
      if (index !== -1) {
        for (const prop in action.payload.changes) {
          state[index][prop] = action.payload.changes[prop];
        }
      }
      return state;
      break;
    default:
      return state;
  }
}

export default targetReducer;