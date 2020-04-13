// actions
import { Program, Episode } from '../interfaces';

export const actionTypes = {
    FETCH_PROGRAM_BY_ID: '@App/FETCH_PROGRAM_BY_ID',
    FETCH_EPISODE: '@App/FETCH_EPISODE',
    SET_PROGRAM: '@App/SET_PROGRAM',
    SET_EPISODE: '@App/SET_EPISODE',
};

export const actions = {
    fetchProgram: (id: number) => ({ type: actionTypes.FETCH_PROGRAM_BY_ID, payload: id }),
    fetchEpisode: (season: string, episode: string, program: string) => ({ type: actionTypes.FETCH_EPISODE, payload: {season, episode, program} }),
    setProgram: (data: Program) => ({ type: actionTypes.SET_PROGRAM, payload: data }),
    setEpisode: (data: Episode) => ({ type: actionTypes.SET_EPISODE, payload: data }),
};
