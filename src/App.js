import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/CounterSlice';

const App = () => {

  const count = useSelector( (state) => state.counter.value )
  const dispatch = useDispatch();

  return (
    <div>
      
      <button onClick={ () => dispatch(increment()) }>
        increment
      </button>
      
        <div>
          {count}
        </div>

      <button onClick={() => dispatch(decrement()) }>
        decrement
      </button>




    </div>
  )
}

export default App
