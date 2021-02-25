import { combineReducers } from 'redux';
import globalEnvReducer from "./globalEnv/globalEnv.reducer";

const rootReducer = combineReducers({
	globalEnv: globalEnvReducer
});

export default rootReducer;