import { actionTypes } from "./actions";
import { ProgramState } from "./interfaces";

const defaultState: ProgramState = {
    title: '',
    id: null,
    description: '',
    cover: '',
    episodes: [],
    episode: null,
    loading: false,
};

export default (state = defaultState, action): ProgramState => {
    switch (action.type) {
        case actionTypes.FETCH_PROGRAM_BY_ID:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.SET_PROGRAM:
            return {
                ...state,
                id: action.payload.id,
                title: action.payload.name,
                description: action.payload.summary,
                cover: action.payload.image.medium,
                episodes: action.payload.episodes,
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
