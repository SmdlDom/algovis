import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";
import { genRandomArray } from '../../algo/sort';
import {fillArray} from "../../algo/helpers";

const INITIAL_SIZE = 50;
const INITIAL_MAX_VAL = 50;
const INITIAL_MIN_VAL = 10;

const INITIAL_STATE = {
	sortType: SortTypes.BUBBLE_SORT,
	arraySize: INITIAL_SIZE,
	arrayMaxVal: INITIAL_MAX_VAL,
	arrayMinVal: INITIAL_MIN_VAL,
	array: genRandomArray(INITIAL_SIZE, INITIAL_MIN_VAL, INITIAL_MAX_VAL),
	partition: [[0,INITIAL_SIZE -1]], //determine the partition of the array as slice
	pivot: INITIAL_SIZE - 1, //determine the pivot location
	sortedIndex: fillArray(-1, INITIAL_SIZE), //A zero mean the element was swap, a one mean the element is sorted.
	direction: true, //Bidirectional algorithm use this field to determine the direction. True mean to the right.
	swap: [0,0],
	finish: false
}

const sortEnvReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SortEnvActionTypes.SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload,
				partition: [[0, INITIAL_SIZE -1]],
				pivot: INITIAL_SIZE - 1,
				sortedIndex: fillArray(-1, INITIAL_SIZE),
				direction: true,
				swap: [0,0],
				finish: false
			}
		case SortEnvActionTypes.SHUFFLE:
			return {
				...state,
				array: genRandomArray(INITIAL_SIZE, INITIAL_MIN_VAL, INITIAL_MAX_VAL),
				partition: [[0, INITIAL_SIZE -1]],
				pivot: INITIAL_SIZE - 1,
				sortedIndex: fillArray(-1, INITIAL_SIZE),
				direction: true,
				swap: [0,0],
				finish: false
			}
		case SortEnvActionTypes.DO_NEXT_STEP_SUCCESS:
			return {
				...state,
				array: action.payload.array,
				sortedIndex: action.payload.sortedIndex,
				direction: action.payload.direction,
				swap: action.payload.swap,
				finish: action.payload.finish,
				partition: action.payload.partition,
				pivot: action.payload.pivot
			}
		default:
			return state
	}
}

export default sortEnvReducer;
