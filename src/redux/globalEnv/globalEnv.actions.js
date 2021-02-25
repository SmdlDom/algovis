import { GlobalEnvActionTypes } from "./globalEnv.types";

export const setSpeed = value => ({
	type: GlobalEnvActionTypes.SET_SPEED,
	payload: value
})

export const setAlgoType = value => ({
	type: GlobalEnvActionTypes.SET_ALGO_TYPE,
	payload: value
})
