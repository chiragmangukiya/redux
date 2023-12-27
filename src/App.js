import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './Compo/counterSlice';
import { useState } from 'react';

function App() {

  const val = useSelector(state=>state.counter.value)
  const dispatch = useDispatch();

  const [txt,settxt]=useState();

  return (
    <>

        <h1>{val}</h1>
        <button onClick={()=>{dispatch(increment(txt))}}>Increment</button>
        <button onClick={()=>{dispatch(decrement(txt))}}>Decrement</button>

        <input type="text" onChange={(e)=>{settxt(parseInt(e.target.value))}} />

    </>
  );
}

export default App;
