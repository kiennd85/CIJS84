import { useState } from 'react';

const userDefault = {
  Firstname: '',
  Middlename: '',
  Lastname: '',
  Phone: '',
  Address: '',
  Email: '',
  Password: '',
  Repassword: '',
  Course: '',
  Gender: '',
};
const useHookRegister = () => {
  const [user, setUser] = useState(userDefault);

  const actSubmit = (event) => {
    console.log(123);
    event.preventDefault();
  };

  const handleChange = (event, name) => {
    const userClone = { ...user };
    if (name == 'Firstname') {
      userClone.Firstname = event.target.value;
    } else if (name == 'Middlename') {
      userClone.Middlename = event.target.value;
    } else if (name == 'Lastname') {
      userClone.Lastname = event.target.value;
    }

    setUser(userClone);
    console.log(userClone);
  };
  return { user, handleChange, actSubmit };
};

export default useHookRegister;
