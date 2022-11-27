import React, { useState } from 'react';
import { useGetNatice } from 'framework';

function Table() {
  const [count, setCount] = useState(0);
  const [native] = useGetNatice('mac');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>{native}</div>
    </div>
  );
}