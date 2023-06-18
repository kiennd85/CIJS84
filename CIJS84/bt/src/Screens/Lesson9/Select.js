import { useContext } from 'react';
import CustomSelect from '../../Components/CustomSelect';
import ThemeContext from '../../ThemeContext';

const dataOption = [
  { key: 0, name: 'Dark' },
  { key: 1, name: 'Light' },
];

const SelectTheme = () => {
  const themeCtx = useContext(ThemeContext);
  const onSelectTheme = (e) => {
    console.log(e.target.value);
    themeCtx.setTheme(e.target.value);
  };
  return (
    <div>
      <CustomSelect
        title={'Select Theme'}
        dataOption={dataOption}
        onChange={onSelectTheme}
        value={themeCtx.theme}
      ></CustomSelect>
    </div>
  );
};

export default SelectTheme;
