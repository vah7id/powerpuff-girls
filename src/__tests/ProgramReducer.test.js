import programReducers, {defaultState} from '../modules/program/state/reducers';
import {actionTypes} from '../modules/program/state/actions';

const actionMock = {
    type: actionTypes.SET_PROGRAM,
    payload: {
        id:6771,
        name: "The Powerpuff Girls",
        summary: "<p>The city of</p>",
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg",
            original: null,
        }
    }
};

const expectedState = {
    id:6771,
    name: "The Powerpuff Girls",
    summary: "<p>The city of</p>",
    image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg",
        original: null,
    },
    episodes: [],
    episode: null,
    loading: false,
};

describe('Program reducer', () => {
    it('should return the initial state', () => {
        expect(programReducers(undefined, {})).toEqual(defaultState);
    });

    it('should handle set program reducer and store the data properly', () => {
        expect(programReducers(defaultState, actionMock)).toEqual(expectedState)
    });
});