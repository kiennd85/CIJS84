import { useState, useEffect } from 'react';

const App1 = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  // effect for update title
  useEffect(() => {
    console.log('count changed');
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>
        {visible && <p>This is hidden content</p>}
        <button onClick={() => setVisible(!visible)}>Change visible</button>
      </div>
    </div>
  );
};

export default App1;
