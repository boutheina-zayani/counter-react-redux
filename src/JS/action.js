import { INCREMENT, DICREMENT,HANDLESHOW} from "./types";

export const increment=(payload)=>{
    return {type:INCREMENT,payload}
}
export const dicrement=()=>{
    return {type:DICREMENT}
}
export const handleShow=()=>{
    return {type:HANDLESHOW}
}