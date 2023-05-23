import { useState } from 'react';
const Test3 = () => {
  const [person, setPerson] = useState({ name: 'MindX', age: 10 });

  //   const increaseAge = () => {
  //     setPerson({ ...person, age: person.age + 1 });
  //   };

  const increaseAge = () => {
    setPerson((prev) => {
      return { ...prev, age: prev.age + 1 };
    });
  };

  return (
    <div>
      <p>
        Hello! I'm {person.name}. I'm {person.age} years old.
      </p>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
};

export default Test3;
