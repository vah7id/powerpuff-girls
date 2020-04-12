import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, actionTypes } from './actions';
import { API_URL } from '../../utils/globals';

function request(url) {
    return fetch(url).then(resp => resp.json());
}

// fetch the program by id
function* fetchProgramById(action) {
    try {
        const program = yield call(request, `${API_URL}/shows/${action.payload}`);
        const episodes = yield call(request, `${API_URL}/shows/${action.payload}/episodes`);
        yield put(actions.setProgram({
            ...program,
            episodes,
        }));
    } catch(err) {
        console.log(err);
    }
}

// fetch the episode generator
function* fetchEpisode(action) {
    try {
        const url = `${API_URL}/shows/${action.payload.program}/episodebynumber?season=${action.payload.season}&number=${action.payload.episode}`;
        const episode = yield call(request, url);
        yield put(actions.setEpisode(episode));
    } catch(err) {
        console.log(err);
    }
}

function* programSagas() {
    yield takeLatest(actionTypes.FETCH_PROGRAM_BY_ID, fetchProgramById);
    yield takeLatest(actionTypes.FETCH_EPISODE, fetchEpisode);
}

export default programSagas;
