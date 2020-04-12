import { fork } from 'redux-saga/effects'
import programSagas from '../modules/program/sagas';

function* rootSaga() {
    yield fork(programSagas);
};

export default rootSaga;