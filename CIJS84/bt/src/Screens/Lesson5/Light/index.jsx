import useHook from './useHook';

const Light = () => {
  const styleCircle = { margin: '5px', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid' };
  const styleButton = { width: '60px', height: '30px', background: 'white', borderRadius: '5px' };
  const { number, handleNext } = useHook();
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>Bài 2. Thực hành đổi màu, click 'Next' để đổi màu theo thứ tự</div>
      <br />
      <button
        onClick={handleNext}
        style={styleButton}
      >
        Next
      </button>
      <div style={{ display: 'flex' }}>
        <div style={{ ...styleCircle, backgroundColor: number == 1 ? 'yellow' : 'white' }}></div>
        <div style={{ ...styleCircle, backgroundColor: number == 2 ? 'red' : 'white' }}></div>
        <div style={{ ...styleCircle, backgroundColor: number == 3 ? 'blue' : 'white' }}></div>
      </div>
    </div>
  );
};

export default Light;
