import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";
import { genRandomArray } from '../../algo/sort';
import {fillArray} from "../../algo/helpers";

const INITIAL_SIZE = 25;
const INITIAL_MAX_VAL = 50;
const INITIAL_MIN_VAL = 10;

const INITIAL_STATE = {
	sortType: SortTypes.BUBBLE_SORT,
	arraySize: INITIAL_SIZE,
	arrayMaxVal: INITIAL_MAX_VAL,
	arrayMinVal: INITIAL_MIN_VAL,
	array: genRandomArray(INITIAL_SIZE, INITIAL_MIN_VAL, INITIAL_MAX_VAL),
	sortedIndex: fillArray(-1, INITIAL_SIZE),
	swap: [0,0],
	finish: false
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
				array: action.payload,
				sortedIndex: fillArray(-1, INITIAL_SIZE),
				swap: [0,0],
				finish: false
			}
		case SortEnvActionTypes.DO_NEXT_STEP_SUCCESS:
			return {
				...state,
				array: action.payload.array,
				sortedIndex: action.payload.sortedIndex,
				swap: action.payload.swap,
				finish: action.payload.finish
			}
		default:
			return state
	}
}

export default sortEnvReducer;
