import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {decrement} from '../slices/counterSlice'

function DecrementCounter() {
  let { counter } = useSelector((state) => state.counter);
  let dispatch=useDispatch()

  function changeValue(){
   let actionObj= decrement()
   dispatch(actionObj)
  }

  return (
    <div>
      <h2 className="text-warning">counter: {counter}</h2>
      <button className="btn btn-danger text-white fw-bold" onClick={changeValue}>decrement</button>
    </div>
  );
}

export default DecrementCounter;
