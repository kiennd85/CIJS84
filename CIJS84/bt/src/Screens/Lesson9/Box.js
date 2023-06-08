import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';

const Box = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div>
      <div style={{ border: '1px solid', width: '200px', height: '200px', backgroundColor: themeCtx.theme == 'Light' ? 'yellow' : 'red' }}></div>
    </div>
  );
};

export default Box;
