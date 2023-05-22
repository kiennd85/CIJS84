import './index.css';
import useHook from './useHook';

const CountNumber = () => {
  const { number, add, sub } = useHook();

  return (
    <div className="box">
      <div>{number}</div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </div>
    </div>
  );
};

export default CountNumber;
