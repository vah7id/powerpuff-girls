export default (state = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_PROGRAM':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
