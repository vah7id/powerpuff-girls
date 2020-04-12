import { combineReducers } from 'redux';
import programReducers from '../modules/program/reducers';

export default combineReducers({
    program: programReducers,
});