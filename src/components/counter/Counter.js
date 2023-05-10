import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addCustomValue } from "./counterSlice";
import { useState } from "react";

const Counter = () => {

    const count  = useSelector( state => state.counter.count);
    const dispatch = useDispatch();

    const [customValue, setcustomValue] = useState(0)    

    const resetCustomValue = (value) => {
        const addValue = Number(value) || 0 
        dispatch(addCustomValue(addValue))  
        setcustomValue(0)
    }

  return (
    <div className="counter">
        <h2>Counter App</h2>
        <p><strong>Counter: </strong>{count}</p>
        <div className="counter__inDecrement">
          <button className="btn btnIncrement" onClick={ () => dispatch(increment())}>Increment</button>
          <button className="btn btnDecrement" onClick={ () => dispatch(decrement())}>Decrement</button>
        </div>
        <div className="counter__customValue">
          <input
          type="text"
          value={customValue}
          onChange={ (e) => setcustomValue(e.target.value)}
            />
          <button className="btn btnCustomValue" onClick={ () => resetCustomValue(customValue)}>Add Custom Value</button>
        </div>
          <div className="counter__reset">
          <button className="btn bntReset" onClick={ () => dispatch(reset())}>Reset Counter</button>
        </div>
    </div>
  )
}

export default Counter