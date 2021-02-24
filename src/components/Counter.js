// importin useState so we can use the state hook
import React, { useState } from 'react';

function Counter(props) {
  // destructuring the num value out of prop
  const { initialCount } = props;
  // setting a variable ("count") to 0 with useState
  const [count, setCount] = useState(initialCount);
  // one big advantage to using setCount is that it keeps us from mutating the count state variable

  const buttonClick = () => setCount(count + 1);

  return (
    <div>
      <div>count: {count}</div>
      {/* using the setCount setter to update count w/ an event listener prop. each time a button is clicked, the Counter function gets called and the component gets rerendered */}
      <button onClick={buttonClick}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default Counter;
