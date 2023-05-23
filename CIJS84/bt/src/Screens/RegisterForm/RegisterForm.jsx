import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomRadio from '../../Components/CustomRadio';
import CustomSelect from '../../Components/CustomSelect';
import CustomTextarea from '../../Components/CustomTextarea';
import './Form.css';
import useHookRegister from './useHook';

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
  const { user, handleChange, actSubmit } = useHookRegister();

  return (
    <div class="regisForm">
      <div class="title">Student Registeration Form</div>
      <form>
        <CustomInput
          title={'Firstname'}
          type={'text'}
          placeholder={'Firstname'}
          value={user.Firstname}
          onChange={(event) => {
            handleChange(event, 'Firstname');
          }}
        />

        <CustomInput
          title={'Middlename'}
          type={'text'}
          placeholder={'Middlename'}
          value={user.Middlename}
          onChange={(event) => {
            handleChange(event, 'Middlename');
          }}
        />

        <CustomInput
          title={'Lastname'}
          type={'text'}
          placeholder={'Lastname'}
          value={user.Lastname}
          onChange={(event) => {
            handleChange(event, 'Lastname');
          }}
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
        <CustomButton
          nameBtn={'Register'}
          onClick={actSubmit}
        />
      </form>
    </div>
  );
}

export default Register;
