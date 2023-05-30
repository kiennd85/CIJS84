import { useState } from 'react';

const userDefault = {
  Firstname: '',
  Lastname: '',
  Gender: '',
};

const errorDefault = {
  Firstname: '',
  Lastname: '',
  Gender: '',
};

const listUserDefault = [
  { id: 1, ho: 'Nguyen', ten: 'Van A', gioitinh: 1 },
  { id: 2, ho: 'Nguyen', ten: 'Thi B', gioitinh: 2 },
];

const btnTypeDefault = {
  type: 'Add',
  newUser: '',
};
const useHookRegister = () => {
  const [user, setUser] = useState(userDefault);
  const [error, setError] = useState(errorDefault);
  const [listUser, setListUser] = useState(listUserDefault);
  const [btnType, setBtnType] = useState(btnTypeDefault);

  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let result = true;
    //Firstname
    if (user.Firstname.trim().length === 0) {
      errorClone.Firstname = 'Please fill your Firstname';
      result = false;
    } else {
      errorClone.Firstname = '';
    }

    //Lastname
    if (user.Lastname.trim().length === 0) {
      errorClone.Lastname = 'Please fill your Lastname';
      result = false;
    } else {
      errorClone.Lastname = '';
    }

    //Gender
    if (user.Gender == '') {
      errorClone.Gender = 'Please select your gender';
      result = false;
    } else {
      errorClone.Gender = '';
    }
    setError(errorClone);

    return result;
  };

  const addBtn = (e) => {
    let result = validate();
    if (result) {
      const id = genId();
      const new_user = { id: id, ho: user.Firstname, ten: user.Lastname, gioitinh: user.Gender };

      const listUserClone = JSON.parse(JSON.stringify(listUser));
      listUserClone.push(new_user);

      setListUser(listUserClone);
      setUser(userDefault);
      alert('CONGRATULATIONS! You have Successfully Registered ');
    }
  };

  const genId = () => {
    const Id = Math.floor(Math.random() * 100);
    const check = listUser.find((item) => Id == item.id);
    if (check) {
      genId();
    }
    return Id;
  };

  const removeBtn = (event, Id) => {
    const listUserClone = JSON.parse(JSON.stringify(listUser));
    const newList = listUserClone.filter((item) => item.id != Id);
    setListUser(newList);
  };

  const editBtn = (event, Id) => {
    console.log('edit', Id);
    //console.log(user);
    const element = listUser.find((item) => Id == item.id);
    const new_user = { Firstname: element.ho, Lastname: element.ten, Gender: element.gioitinh };
    setUser(new_user);
    setBtnType({ type: 'Update', newUser: element });
  };

  const updateBtn = (event, newUser) => {
    console.log(newUser);
    let result = validate();
  };

  const handleChange = (event, name) => {
    //console.log(event);
    const userClone = JSON.parse(JSON.stringify(user));
    if (name == 'Firstname') {
      userClone.Firstname = event.target.value;
    } else if (name == 'Lastname') {
      userClone.Lastname = event.target.value;
    } else if (name == 'Gender') {
      userClone.Gender = event.target.value;
    }

    setUser(userClone);
  };
  return { user, error, handleChange, addBtn, listUser, removeBtn, editBtn, btnType, updateBtn };
};

export default useHookRegister;
