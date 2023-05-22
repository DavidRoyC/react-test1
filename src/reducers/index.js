// Para usar más de un reductor en redux (antiguo)
import { combineReducers } from "redux";

import agentReducer from "./agentReducer"; 
import targetReducer from "./targetReducer";

const rootReducer = combineReducers({
  targets: targetReducer,
  agents: agentReducer
});

export default rootReducer;