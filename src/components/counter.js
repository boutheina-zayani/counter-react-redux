import { useDispatch, useSelector } from "react-redux";
import  {increment,dicrement} from "../JS/action"


const Counter=()=>{
    const x=useSelector((state)=>state.count);
    const dispatch=useDispatch();

    return(
        <>
        <button onClick={()=>dispatch(increment(3)) }>+</button>
        <span>{x}</span>
        <button  onClick={()=>dispatch(dicrement())}>-</button>
        </>
    )
}
export default Counter;