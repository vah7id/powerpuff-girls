export default (state = {}, action: any) => {
    switch (action.type) {
        case 'FETCH_EPISODE':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
