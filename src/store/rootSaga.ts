import { fork } from 'redux-saga/effects'
import programSagas from '../modules/program/state/sagas';

function* rootSaga() {
    // fork and watch all the sagas
    yield fork(programSagas);
};

export default rootSaga;