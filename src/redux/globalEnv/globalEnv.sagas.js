import { takeLatest, put, call, all, select, delay } from 'redux-saga/effects'
import {AlgoTypes, GlobalEnvActionTypes} from "./globalEnv.types";
import {selectAlgoType, selectSpeed, selectStop} from "./globalEnv.selectors";
import {doNextSortStep} from "../sortEnv/sortEnv.actions";
import {selectSortFinish} from "../sortEnv/sortEnv.selectors";
import {setStop} from "./globalEnv.actions";

function* doNextStep() {
	let algoType = yield select(selectAlgoType);

	switch(algoType) {
		case AlgoTypes.SORT:
			yield put(doNextSortStep());
			break;
		default:
			break;
	}
}

function* doPlay(all) {
	let algoType = yield select(selectAlgoType);
	yield put(setStop(false));
	let isStop = false;
	let speed = yield select(selectSpeed);

	switch(algoType) {
		case AlgoTypes.SORT:
			let isFinish = yield select(selectSortFinish);

			while (!isFinish && !isStop) {
				yield put(doNextSortStep());
				isFinish = yield select(selectSortFinish);
				isStop = yield select(selectStop);
				speed = yield select(selectSpeed);
				if(!all) {
					yield delay(200 / speed);
				}
			}
			break;
		default:
			break
	}
}


function* doNextStepStart()  {
	yield takeLatest(
		GlobalEnvActionTypes.DO_NEXT_STEP,
		doNextStep
	)
}

function* doPlayStart() {
	yield takeLatest(
		GlobalEnvActionTypes.DO_PLAY,
		doPlay,
		false
	)
}

function* doAllStart() {
	yield takeLatest(
		GlobalEnvActionTypes.DO_ALL,
		doPlay,
		true
	)
}



export function* globalEnvSagas() {
	yield all([
		call(doNextStepStart),
		call(doPlayStart),
		call(doAllStart)
	]);
}
