import { useState } from 'react';

const Test4 = () => {
  const [selected, setSelected] = useState('yes');

  return (
    <div>
      <input
        type="radio"
        name="gender"
        value="male"
        checked="true"
      />
      <label htmlFor="">Male</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked="false"
      />
      <label htmlFor="">Female</label>
      <input
        type="radio"
        name="gender"
        value="other"
        checked="false"
      />
      <label htmlFor="">Other</label>
    </div>
  );
};

export default Test4;
