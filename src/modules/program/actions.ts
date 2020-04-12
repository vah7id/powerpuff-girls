// actions

export const actionTypes = {
    FETCH_PROGRAM_BY_ID: '@App/FETCH_PROGRAM_BY_ID',
};

export const actions = {
    fetchProgram: (id: number) => ({ type: actionTypes.FETCH_PROGRAM_BY_ID, payload: id }),
};
