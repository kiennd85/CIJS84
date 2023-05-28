import { useState } from 'react';
const dataRadio = [
  { key: 0, name: 'gender', value: 'Male' },
  { key: 1, name: 'gender', value: 'Female' },
  { key: 2, name: 'gender', value: 'Other' },
];

const Test4 = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    console.log(e);
    setSelected(e.target.value);
  };
  return (
    <div>
      {dataRadio.map((item) => {
        return (
          <div key={item.key}>
            <input
              type="radio"
              name={item.name}
              value={item.value}
              checked={selected === item.value}
              onChange={handleChange}
            />
            <label htmlFor="">{item.value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Test4;
