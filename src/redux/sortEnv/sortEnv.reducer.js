import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";
import { genRandomArray } from '../../algo/sort/shuffle';

const INITIAL_SIZE = 25;
const INITIAL_MAX_VAL = 50;
const INITIAL_MIN_VAL = 10;

const INITIAL_STATE = {
	sortType: SortTypes.BUBBLE_SORT,
	array: genRandomArray(INITIAL_SIZE, INITIAL_MIN_VAL, INITIAL_MAX_VAL),
	arraySize: INITIAL_SIZE,
	arrayMaxVal: INITIAL_MAX_VAL,
	arrayMinVal: INITIAL_MIN_VAL
}

const sortEnvReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SortEnvActionTypes.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload
			}
		case SortEnvActionTypes.SHUFFLE_SUCCESS:
			return {
				...state,
				array: action.payload
			}
		default:
			return state
	}
}

export default sortEnvReducer;
