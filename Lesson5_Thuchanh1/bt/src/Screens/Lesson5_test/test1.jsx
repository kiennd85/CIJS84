import { useState } from 'react';

const Test1 = () => {
  const [count, setCount] = useState(10);

  const onIncreaseClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
  );
};

export default Test1;
