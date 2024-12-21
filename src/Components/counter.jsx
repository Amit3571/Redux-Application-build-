import {useDispatch, useSelector} from "react-redux"
function Counter(){
    const count = useSelector(state=>state.count);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type:'INCREMENT'})
    }
    return(
        <div>
            <h1>Counter Component:{count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
        </div>
    );
}
export default Counter;