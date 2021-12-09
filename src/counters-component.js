import React, { useState } from 'react';

function CountersComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Counter
      </button>
    </div>
  );
}

export default CountersComponent;