import './index.css';
import useHook from './useHook';

const CountNumber = () => {
  const { number, add, sub } = useHook();
  const styleButton = { width: '60px', height: '30px', background: 'white', borderRadius: '5px' };
  return (
    <div>
      <div>Bài 1. Thực hành tăng/giảm số</div>
      <br />
      <div style={{ backgroundColor: 'aqua', width: '50px', textAlign: 'center', fontSize: '1.3rem' }}>{number}</div>
      <div>
        <button
          style={styleButton}
          onClick={add}
        >
          +
        </button>
        <button
          style={styleButton}
          onClick={sub}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CountNumber;
