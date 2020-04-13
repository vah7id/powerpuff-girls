import { actionTypes } from "./actions";
import { ProgramState } from "../interfaces";

export const defaultState: ProgramState = {
    name: '',
    id: null,
    summary: '',
    image: {
        medium: null,
        original: null,
    },
    episodes: [],
    episode: null,
    loading: false,
};

export default (state = defaultState, action): ProgramState => {
    switch (action.type) {
        case actionTypes.FETCH_PROGRAM_BY_ID:
        case actionTypes.FETCH_EPISODE:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.SET_PROGRAM:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case actionTypes.SET_EPISODE:
            return {
                ...state,
                episode: action.payload,
            };
        default:
            return state;
    }
}
