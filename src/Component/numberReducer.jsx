import ACTIONS from './ACTIONS'
const numberReducer = (state, action) => {
    console.log('running');
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + action.payload }
        case ACTIONS.DECREMENT:
            return { count: state.count - action.payload }
        case ACTIONS.RESET:
            return { count: 0 }
        default:
            return state
    }
}
export default numberReducer