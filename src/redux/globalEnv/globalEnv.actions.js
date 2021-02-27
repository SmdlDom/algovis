import { GlobalEnvActionTypes } from "./globalEnv.types";

export const setSpeed = value => ({
	type: GlobalEnvActionTypes.SET_SPEED,
	payload: value
});

export const setAlgoType = value => ({
	type: GlobalEnvActionTypes.SET_ALGO_TYPE,
	payload: value
});

export const setStop = value => ({
	type: GlobalEnvActionTypes.SET_STOP,
	payload: value
})

export const doNextStep = () => ({
	type: GlobalEnvActionTypes.DO_NEXT_STEP
});

export const doPlay = () => ({
	type: GlobalEnvActionTypes.DO_PLAY
});

export const doAll = () => ({
	type: GlobalEnvActionTypes.DO_ALL
})
