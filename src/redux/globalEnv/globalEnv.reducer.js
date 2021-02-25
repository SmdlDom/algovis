import { GlobalEnvActionTypes } from "./globalEnv.types";

const INITIAL_STATE = {
	speed: 1
}

const globalEnvReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case GlobalEnvActionTypes.SET_SPEED:
			return {
				...state,
				speed: action.payload
			}
		default:
			return state
	}
}

export default globalEnvReducer;