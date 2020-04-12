import { takeLatest } from 'redux-saga/effects';
import { actionTypes } from './actions';

interface fetchProgramAction {
    id: number;
}

function* fetchProgramById(action) {
    // fetch the program by id
}

function* programSagas() {
    yield takeLatest(actionTypes.FETCH_PROGRAM_BY_ID, fetchProgramById);
}

export default programSagas;
