import { SortEnvActionTypes } from "./sortEnv.types";

export const setSortType = value => ({
	type: SortEnvActionTypes.SET_SORT_TYPE,
	payload: value
})