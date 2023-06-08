import { createContext } from 'react';

const defaultTheme = { theme: 'Light' };
const ThemeContext = createContext(defaultTheme);

export default ThemeContext;
