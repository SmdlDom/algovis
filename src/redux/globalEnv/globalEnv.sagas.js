import { takeLatest, put, call, all, select } from 'redux-saga/effects'
import {AlgoTypes, GlobalEnvActionTypes} from "./globalEnv.types";
import {selectAlgoType} from "./globalEnv.selectors";
import {doNextSortStep} from "../sortEnv/sortEnv.actions";

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

function* doNextStepStart()  {
	yield takeLatest(
		GlobalEnvActionTypes.DO_NEXT_STEP,
		doNextStep
	)
}

export function* globalEnvSagas() {
	yield all([
		call(doNextStepStart)
	]);
}
