import { INCREMENT,DICREMENT,HANDLESHOW} from "./types";

const initialState={
    count:0,
    show:false
};
 const Reducer =(state=initialState,action)=>{
     switch(action.type){
         case INCREMENT: return {...state,count : state.count+action.payload};
         case DICREMENT : return {...state,count :state.count>0 ? state.count-1 : state.count};
         case HANDLESHOW : return {...state,show : !state.show}
         default: return state
     }

 }
 export default  Reducer