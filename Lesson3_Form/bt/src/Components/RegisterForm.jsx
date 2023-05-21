import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import CustomRadio from './CustomRadio';
import CustomSelect from './CustomSelect';
import CustomTextarea from './CustomTextarea';
import './Form.css';

const dataSelect = [
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Javascript', label: 'Javascript' },
];
const dataRadio = [
  { name: 'gender', value: 'Male' },
  { name: 'gender', value: 'Female' },
  { name: 'gender', value: 'Other' },
];
function Register() {
  return (
    <div class="regisForm">
      <div class="title">Student Registeration Form</div>
      <form>
        <CustomInput
          title={'Firstname'}
          type={'text'}
          placeholder={'Firstname'}
        />

        <CustomInput
          title={'Middlename'}
          type={'text'}
          placeholder={'Middlename'}
        />

        <CustomInput
          title={'Lastname'}
          type={'text'}
          placeholder={'Lastname'}
        />

        <CustomSelect
          title="Course"
          dataSelect={dataSelect}
        />
        <CustomRadio
          title="Gender"
          dataRadio={dataRadio}
        />

        <CustomInput
          title={'Phone'}
          type={'number'}
          placeholder={'phone no'}
        />

        <CustomTextarea
          title={'Current address'}
          placeholder={'Current address'}
        />

        <CustomInput
          className={'fontbold'}
          title={'Email'}
          type={'email'}
          placeholder={'Enter email'}
        />

        <CustomInput
          className={'fontbold'}
          title={'Password'}
          type={'password'}
          placeholder={'Enter Password'}
        />

        <CustomInput
          className={'fontbold'}
          title={'Retype Password'}
          type={'password'}
          placeholder={'Retype Password'}
        />
        <CustomButton nameBtn={'Register'} />
      </form>
    </div>
  );
}

export default Register;
