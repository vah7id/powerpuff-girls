import { combineReducers } from 'redux';
import programReducers from '../modules/program/reducers';
import episodeReducers from '../modules/episode/reducers';

export default combineReducers({
    programReducers,
    episodeReducers
});