import { all, call } from 'redux-saga/effects';
import {sortEnvSagas} from "./sortEnv/sortEnv.sagas";

export default function* rootSaga() {
	yield all ([
		call(sortEnvSagas)
	]);
}