
import './App.css';
import Counter from "./components/counter"
import {useDispatch, useSelector} from 'react-redux'
import { handleShow } from './JS/action';

function App() {
  const dispatch=useDispatch();

  const show=useSelector((state)=>state.show)
  return (
    <div className="App">
      <button onClick={()=>dispatch(handleShow())}>show</button>
     {show && <Counter/>}
    </div>
  );
}

export default App;
