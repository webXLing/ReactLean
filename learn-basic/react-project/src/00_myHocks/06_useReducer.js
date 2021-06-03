import { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';

function reducer (state, action) {
  switch (action.type) {
    case 'up':
      return { count: state.count + 1 };
    case 'down':
      return { count: state.count - 1 };
  }
}

function Counter () {
  const [state, dispatch] = useReducer(reducer, { count: 1 })
  return (
    <div>
      {state.count}
      <hr />
      <button onClick={() => dispatch({ type: 'up' })}>add</button>
      <button onClick={() => dispatch({ type: 'down' })}>sub</button>
    </div>
  );
}

export default Counter