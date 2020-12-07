import { useReducer } from 'react'
import numberReducer from './numberReducer'
import ACTIONS from './ACTIONS'

const Parent = () => {
    // use Reducer is used to handle complex/multiple states 
    
    // increment decrement and reset all are working with one single state 
    // even more states will work same with the helf of use reducer
    const [state, dispatch] = useReducer(numberReducer, { count: 0 })
    console.log('random', Math.random());
    const increment = () => {
        dispatch({type: ACTIONS.INCREMENT, payload: Math.random()})
    }
    const decrement = () => {
        dispatch({type: ACTIONS.DECREMENT, payload: Math.random()})
    }
    const reset = () => {
        dispatch({type: ACTIONS.RESET})
    }
    console.log('state', state.count);
    return (
        <div>
            <h2>Parent {state.count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Parent