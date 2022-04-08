import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByNumber,
  decrementByNumber,
} from "../store/Counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByNumber(10))}>+10</button>
      <button onClick={() => dispatch(decrementByNumber(10))}>-10</button>
    </div>
  );
}
