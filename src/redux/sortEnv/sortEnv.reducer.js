import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";

const INITIAL_STATE = {
	sortType: SortTypes.BUBBLE_SORT
}

const sortEnvReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SortEnvActionTypes.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload
			}
		default:
			return state
	}
}

export default sortEnvReducer;