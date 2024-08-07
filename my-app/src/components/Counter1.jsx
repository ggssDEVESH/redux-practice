import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../state/CounterSlice";

export default function Counter1() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  if (count === undefined) {
    return <div>Loading...</div>; // Handle the case where count might be undefined
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </>
  );
}
