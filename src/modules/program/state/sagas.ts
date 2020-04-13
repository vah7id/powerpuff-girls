import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, actionTypes } from './actions';
import { API_URL } from '../../../utils/globals';

function request(url: string) {
    return fetch(url).then(resp => resp.json());
}

// fetch the program by id
function* fetchProgramById(action) {
    try {
        // request to fetch the program and episodes data
        const program = yield call(request, `${API_URL}/shows/${action.payload}`);
        const episodes = yield call(request, `${API_URL}/shows/${action.payload}/episodes`);
        // disptach(put) the setProgram action and store the data on state
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
        // generate the episode get API endpoint url
        const url = `${API_URL}/shows/${action.payload.program}/episodebynumber?season=${action.payload.season}&number=${action.payload.episode}`;
        const episode = yield call(request, url);
        yield put(actions.setEpisode(episode));
    } catch(err) {
        console.log(err);
    }
}

function* programSagas() {
    // watch and take the latest fetch program and episode action creator from redux
    yield takeLatest(actionTypes.FETCH_PROGRAM_BY_ID, fetchProgramById);
    yield takeLatest(actionTypes.FETCH_EPISODE, fetchEpisode);
}

export default programSagas;
