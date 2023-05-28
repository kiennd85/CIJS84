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
    if (user.Firstname.trim().length === 0) {
      errorClone.Firstname = 'Please fill your Firstname';
      result = false;
    } else {
      errorClone.Firstname = '';
    }

    //Middlename
    if (user.Middlename.trim().length === 0) {
      errorClone.Middlename = 'Please fill your Middlename';
      result = false;
    } else {
      errorClone.Middlename = '';
    }

    //Lastname
    if (user.Lastname.trim().length === 0) {
      errorClone.Lastname = 'Please fill your Lastname';
      result = false;
    } else {
      errorClone.Lastname = '';
    }

    //Phone
    if (user.Phone.trim().length === 0) {
      errorClone.Phone = 'Please fill your phone number';
    } else if (isNaN(user.Phone)) {
      errorClone.Phone = 'Invalid phone number';
      result = false;
    } else {
      errorClone.Phone = '';
    }

    //Email
    if (user.Email.trim().length === 0) {
      errorClone.Email = 'Please fill your email';
      result = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.Email)) {
      errorClone.Email = 'Invalid email address';
      result = false;
    } else {
      errorClone.Email = '';
    }

    //Password
    if (user.Password.trim().length === 0) {
      errorClone.Password = 'Please fill password';
      result = false;
    } else {
      errorClone.Password = '';
    }

    //Repassword
    if (user.Repassword.trim().length === 0) {
      errorClone.Repassword = 'Please fill re-password';
      result = false;
    } else if (user.Password != user.Repassword) {
      errorClone.Repassword = 'Re-password not match with password';
    } else {
      errorClone.Repassword = '';
    }

    //Repassword
    if (user.Address.trim().length === 0) {
      errorClone.Address = 'Please fill your address';
      result = false;
    } else {
      errorClone.Address = '';
    }

    //Course
    if (user.Course == '0') {
      errorClone.Course = 'Please select one course';
      result = false;
    } else {
      errorClone.Course = '';
    }

    //Course
    if (user.Gender == '') {
      errorClone.Gender = 'Please select your gender';
      result = false;
    } else {
      errorClone.Gender = '';
    }
    setError(errorClone);

    return result;
  };

  const handleButton = (e) => {
    //console.log(e);
    let result = validate();
    //let result = true;

    if (result) {
      console.log(user);
      alert('CONGRATULATIONS! You have Successfully Registered ');
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
    } else if (name == 'Gender') {
      userClone.Gender = event.target.value;
    }

    setUser(userClone);
  };
  return { user, error, handleChange, handleButton };
};

export default useHookRegister;
