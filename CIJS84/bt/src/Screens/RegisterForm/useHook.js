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
  Course: '0',
  Gender: '',
};

const errorDefault = {
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
  const [error, setError] = useState(errorDefault);

  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let result = true;
    //Firstname
    if (user.Firstname == '') {
      errorClone.Firstname = 'Không được để trống';
      result = false;
    } else {
      errorClone.Firstname = '';
    }

    //Middlename
    if (user.Middlename == '') {
      errorClone.Middlename = 'Không được để trống';
      result = false;
    } else {
      errorClone.Middlename = '';
    }

    //Lastname
    if (user.Lastname == '') {
      errorClone.Lastname = 'Không được để trống';
      result = false;
    } else {
      errorClone.Lastname = '';
    }

    //Phone
    if (user.Phone == '') {
      errorClone.Phone = 'Không được để trống';
      result = false;
    } else {
      errorClone.Phone = '';
    }

    //Email
    if (user.Email == '') {
      errorClone.Email = 'Không được để trống';
      result = false;
    } else {
      errorClone.Email = '';
    }

    //Password
    if (user.Password == '') {
      errorClone.Password = 'Không được để trống';
      result = false;
    } else {
      errorClone.Password = '';
    }

    //Repassword
    if (user.Repassword == '') {
      errorClone.Repassword = 'Không được để trống';
      result = false;
    } else {
      errorClone.Repassword = '';
    }

    //Repassword
    if (user.Address == '') {
      errorClone.Address = 'Không được để trống';
      result = false;
    } else {
      errorClone.Address = '';
    }

    //Course
    if (user.Course == '0') {
      errorClone.Course = 'Chọn một khóa học';
      result = false;
    } else {
      errorClone.Course = '';
    }
    setError(errorClone);

    return result;
  };

  const handleButton = (e) => {
    console.log(e);
    let result = validate();
    //let result = true;

    if (result) {
      console.log(user);
    }
  };

  const handleChange = (event, name) => {
    const userClone = JSON.parse(JSON.stringify(user));
    if (name == 'Firstname') {
      userClone.Firstname = event.target.value;
    } else if (name == 'Middlename') {
      userClone.Middlename = event.target.value;
    } else if (name == 'Lastname') {
      userClone.Lastname = event.target.value;
    } else if (name == 'Phone') {
      userClone.Phone = event.target.value;
    } else if (name == 'Email') {
      userClone.Email = event.target.value;
    } else if (name == 'Password') {
      userClone.Password = event.target.value;
    } else if (name == 'Repassword') {
      userClone.Repassword = event.target.value;
    } else if (name == 'Address') {
      userClone.Address = event.target.value;
    } else if (name == 'Course') {
      userClone.Course = event.target.value;
    }

    setUser(userClone);
  };
  return { user, error, handleChange, handleButton };
};

export default useHookRegister;
