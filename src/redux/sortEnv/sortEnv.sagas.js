import {takeLatest, put, call, all, select} from 'redux-saga/effects'
import {SortEnvActionTypes, SortTypes} from "./sortEnv.types";
import {doNextSortStepSuccess, shuffleSuccess} from "./sortEnv.actions";
import {bubbleSortStep, genRandomArray} from "../../algo/sort";
import {
	selectArray,
	selectArrayMaxVal,
	selectArrayMinVal,
	selectArraySize,
	selectCurrent, selectFinish, selectSortedAmount, selectSortedIndex,
	selectSortType
} from "./sortEnv.selectors";

function* doShuffle() {
	let size = yield select(selectArraySize);
	let minVal = yield select(selectArrayMinVal);
	let maxVal = yield select(selectArrayMaxVal)
	yield put(shuffleSuccess(genRandomArray(size, minVal, maxVal)));
}

function* doNextStep() {
	let sortType = yield select(selectSortType);
	let array = yield select(selectArray);
	let sortedIndex = yield select(selectSortedIndex);
	let sortedAmount = yield select(selectSortedAmount);
	let curr = yield select(selectCurrent);
	//If the array is sorted we have nothing to do here
	if (yield select(selectFinish)) return;
	switch(sortType) {
		case SortTypes.BUBBLE_SORT:
			let payload = yield bubbleSortStep(array, sortedIndex, sortedAmount, curr);
			yield put(doNextSortStepSuccess(payload))
			break;
		case SortTypes.QUICK_SORT:
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

function* doShuffleStart() {
	yield takeLatest(
		SortEnvActionTypes.SHUFFLE,
		doShuffle
	);
}

export function* sortEnvSagas() {
	yield all([
		call(doShuffleStart),
		call(doNextStepStart)
	]);
}
