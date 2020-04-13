import { combineReducers } from 'redux';
import programReducers from '../modules/program/state/reducers';

export default combineReducers({
    program: programReducers,
});