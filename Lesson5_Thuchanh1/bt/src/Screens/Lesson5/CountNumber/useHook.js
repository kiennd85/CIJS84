import { useState } from 'react';

const useHook = () => {
  const [number, setNumber] = useState(10);

  const add = () => {
    setNumber(number + 1);
  };

  const sub = () => {
    setNumber(number - 1);
  };
  return {
    number,
    add,
    sub,
  };
};

export default useHook;
