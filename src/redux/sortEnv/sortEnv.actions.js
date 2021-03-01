import { SortEnvActionTypes } from "./sortEnv.types";

export const setSortType = value => ({
	type: SortEnvActionTypes.SET_SORT_TYPE,
	payload: value
});

export const shuffle = () => ({
	type: SortEnvActionTypes.SHUFFLE
});

export const doNextSortStep = () => ({
	type: SortEnvActionTypes.DO_NEXT_STEP
});

export const doNextSortStepSuccess = (payload) => ({
	type: SortEnvActionTypes.DO_NEXT_STEP_SUCCESS,
	payload: payload
});
