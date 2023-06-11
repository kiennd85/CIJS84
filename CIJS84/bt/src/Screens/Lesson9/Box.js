import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import './Box.css';
const Box = () => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div>
      <div
        className="box"
        style={{ backgroundColor: themeCtx.theme == 'Light' ? 'yellow' : 'red' }}
      ></div>
    </div>
  );
};

export default Box;
