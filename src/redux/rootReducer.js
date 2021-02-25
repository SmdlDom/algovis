import { combineReducers } from 'redux';
import globalEnvReducer from "./globalEnv/globalEnv.reducer";
import sortEnvReducer from "./sortEnv/sortEnv.reducer";

const rootReducer = combineReducers({
	globalEnv: globalEnvReducer,
	sortEnv: sortEnvReducer
});

export default rootReducer;