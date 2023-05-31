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
  { id: 1, ho: 'Nguyễn', ten: 'Văn A', gioitinh: 1 },
  { id: 2, ho: 'Nguyễn', ten: 'Thị B', gioitinh: 2 },
];

const btnTypeDefault = {
  type: 'Add',
  editUser: '',
};

const noticeDefault = { show: false, content: 'Thông báo' };

const useHookRegister = () => {
  const [user, setUser] = useState(userDefault);
  const [error, setError] = useState(errorDefault);
  const [listUser, setListUser] = useState(listUserDefault);
  const [btnType, setBtnType] = useState(btnTypeDefault);
  const [notice, setNotice] = useState(noticeDefault);

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
      setNotice({ show: true, content: `Đã thêm user: ${user.Firstname} ${user.Lastname}` });

      //alert('CONGRATULATIONS! You have Successfully Registered ');
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
    const element = listUser.find((item) => Id == item.id);
    const newList = listUserClone.filter((item) => item.id != Id);
    setListUser(newList);
    setUser(userDefault);
    setBtnType(btnTypeDefault);
    setNotice({ show: true, content: `Đã xóa user: ${element.ho} ${element.ten}` });
  };

  const editBtn = (event, Id) => {
    console.log('edit', Id);
    const element = listUser.find((item) => Id == item.id);
    const editUser = { Firstname: element.ho, Lastname: element.ten, Gender: element.gioitinh };
    console.log(element);
    setUser(editUser);
    setBtnType({ type: 'Update', editUser: element });
  };

  const updateBtn = (event, editUser) => {
    console.log(editUser);
    let result = validate();
    if (result) {
      editUser.ho = user.Firstname;
      editUser.ten = user.Lastname;
      editUser.gioitinh = user.Gender;
      setUser(userDefault);
      setBtnType(btnTypeDefault);
      setNotice({ show: true, content: `Đã update user: ${user.Firstname} ${user.Lastname}` });
    }
  };

  const cancelBtn = () => {
    setUser(userDefault);
    setBtnType(btnTypeDefault);
    setNotice(noticeDefault);
  };

  const handleChange = (event, name) => {
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
  return { user, error, handleChange, addBtn, listUser, removeBtn, editBtn, btnType, updateBtn, cancelBtn, notice };
};

export default useHookRegister;
