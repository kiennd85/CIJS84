import { useState } from 'react';
const Test2 = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
};

export default Test2;
