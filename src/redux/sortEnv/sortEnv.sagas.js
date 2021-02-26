import {takeLatest, put, call, all, select} from 'redux-saga/effects'
import {SortEnvActionTypes} from "./sortEnv.types";
import {shuffleSuccess} from "./sortEnv.actions";
import {genRandomArray} from "../../algo/sort/shuffle";
import {selectArrayMaxVal, selectArrayMinVal, selectArraySize} from "./sortEnv.selectors";

function* doShuffle() {
	let size = yield select(selectArraySize);
	let minVal = yield select(selectArrayMinVal);
	let maxVal = yield select(selectArrayMaxVal)
	yield put(shuffleSuccess(genRandomArray(size, minVal, maxVal)));
}

export function* doShuffleStart() {
	yield takeLatest(
		SortEnvActionTypes.SHUFFLE,
		doShuffle
	);
}

export function* sortEnvSagas() {
	yield all([
		call(doShuffleStart)
	]);
}
