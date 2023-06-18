import { useState } from 'react';
import ThemeContext from '../../ThemeContext';
import Box from './Box';
import SelectTheme from './Select';

const Lesson9 = () => {
  const [theme, setTheme] = useState('Light');
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="container">
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </div>
      <div>
        <SelectTheme></SelectTheme>
      </div>
    </ThemeContext.Provider>
  );
};

export default Lesson9;
