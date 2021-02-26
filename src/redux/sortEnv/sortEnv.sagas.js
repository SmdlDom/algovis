import {takeLatest, put, call, all, select} from 'redux-saga/effects'
import {SortEnvActionTypes} from "./sortEnv.types";
import {shuffleSuccess} from "./sortEnv.actions";
import {genRandomArray} from "../../algo/sort/shuffle";
import {selectArraySize} from "./sortEnv.selectors";

function* doShuffle() {
	let size = yield select(selectArraySize);
	yield put(shuffleSuccess(genRandomArray(size)));
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