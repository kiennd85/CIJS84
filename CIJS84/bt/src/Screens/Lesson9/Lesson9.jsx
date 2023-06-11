import { useState } from 'react';
import ThemeContext from '../../ThemeContext';
import Box from './Box';

const Lesson9 = () => {
  const [theme, setTheme] = useState('Light');
  return (
    <div className="container">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </ThemeContext.Provider>
    </div>
  );
};

export default Lesson9;
