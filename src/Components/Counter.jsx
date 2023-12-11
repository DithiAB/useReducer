import {useReducer} from 'react'
import './Counter.css'

const value=0;
const reducer=(state, action)=>{

    if(action.type==="Increment"){
       return (state<9)? state+1:state
    }

    if(action.type==="Decrement"){
        return (state>0)? state-1:state
    }
    return state;
}
const Counter = () => {
    const[state, dispatch]= useReducer(reducer,value)
  return (
    <div className='main'>
        <h1>Count:{state}</h1>
        <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
    </div>
  )
}

export default Counter