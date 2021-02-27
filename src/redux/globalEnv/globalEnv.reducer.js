import {AlgoTypes, GlobalEnvActionTypes} from "./globalEnv.types";

const INITIAL_STATE = {
	speed: 1,
	algoType: AlgoTypes.NONE,
	stop: true
}

const globalEnvReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case GlobalEnvActionTypes.SET_SPEED:
			return {
				...state,
				speed: action.payload
			}
		case GlobalEnvActionTypes.SET_STOP:
			return {
				...state,
				stop: action.payload
			}
		case GlobalEnvActionTypes.SET_ALGO_TYPE:
			return {
				...state,
				algoType: action.payload,
				stop: true
			}
		default:
			return state
	}
}

export default globalEnvReducer;
