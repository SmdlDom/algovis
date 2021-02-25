import { GlobalEnvActionTypes } from "./globalEnv.types";

export const setSpeed = value => ({
	type: GlobalEnvActionTypes.SET_SPEED,
	payload: value
})