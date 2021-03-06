import {takeLatest, put, call, all, select} from 'redux-saga/effects'
import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";
import {doNextSortStepSuccess} from "./sortEnv.actions";
import {bubbleSortStep, cocktailShakerSortStep} from "../../algo/sort";
import {
	selectArray,

	selectCurrent, selectSortFinish, selectSortedIndex,
	selectSortType, selectDirection, selectPartition, selectPivot
} from "./sortEnv.selectors";

function* doNextStep() {
	//If the array is sorted we have nothing to do here
	if (yield select(selectSortFinish)) return;

	let sortType = yield select(selectSortType);
	let array = yield select(selectArray);
	let sortedIndex = yield select(selectSortedIndex);
	let curr = yield select(selectCurrent);
	let direction = yield select(selectDirection);
	let partition = yield select(selectPartition);
	let pivot = yield select(selectPivot);

	let payload;

	switch(sortType) {
		case SortTypes.BUBBLE_SORT:
			payload = yield bubbleSortStep(array, sortedIndex, curr);
			yield put(doNextSortStepSuccess(payload))
			break;
		case SortTypes.COCKTAIL_SHAKER_SORT:
			payload = yield cocktailShakerSortStep(array, sortedIndex, curr, direction);
			yield put(doNextSortStepSuccess(payload))
			break;
		case SortTypes.QUICK_SORT:
			console.log("QUICK SORT");
			break;
		default:
			break;
	}
}

export function* doNextStepStart() {
	yield takeLatest(
		SortEnvActionTypes.DO_NEXT_STEP,
		doNextStep
	)
}

export function* sortEnvSagas() {
	yield all([
		call(doNextStepStart)
	]);
}
