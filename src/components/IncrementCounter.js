import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,incrementByAValue} from '../slices/counterSlice'

function IncrementCounter() {
  let { counter } = useSelector((state) => state.counter);
  let dispatch=useDispatch()

  function changeCounter(){
    //calling action creator function
    let actionObj=increment();
    console.log(actionObj)
    //dispatch actionObj to store
    dispatch(actionObj)
  }

  function changeCounterByAValue(){
    //calling action creator function
    let actionObj=incrementByAValue(10);
    console.log(actionObj)
    //dispatch actionObj to store
    dispatch(actionObj)
  }

  return (
    <div>
      <h2 className="text-primary">counter :{counter}</h2>
      <button className="btn btn-success text-white fw-bold" onClick={changeCounter}>Increment</button>
      <button className="btn btn-success text-white fw-bold" onClick={changeCounterByAValue}>Increment by a value</button>
    </div>
  );
}

export default IncrementCounter;
