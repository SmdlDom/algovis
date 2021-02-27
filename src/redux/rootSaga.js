import { all, call } from 'redux-saga/effects';
import {sortEnvSagas} from "./sortEnv/sortEnv.sagas";
import {globalEnvSagas} from "./globalEnv/globalEnv.sagas";

export default function* rootSaga() {
	yield all ([
		call(sortEnvSagas),
		call(globalEnvSagas)
	]);
}
