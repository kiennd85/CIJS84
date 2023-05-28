import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomRadio from '../../Components/CustomRadio';
import CustomSelect from '../../Components/CustomSelect';
import CustomTextarea from '../../Components/CustomTextarea';
import ErrorWarning from '../../Components/ErrorWarning';
import './Form.css';
import useHookRegister from './useHook';

const dataOption = [
  { key: 0, name: 'Choose one course' },
  { key: 1, name: 'HTML' },
  { key: 2, name: 'CSS' },
  { key: 3, name: 'Javascript' },
];
const dataRadio = [
  { key: 0, name: 'gender', value: 'Male' },
  { key: 1, name: 'gender', value: 'Female' },
  { key: 2, name: 'gender', value: 'Other' },
];

function Register() {
  const { user, error, handleChange, handleButton } = useHookRegister();

  return (
    <div className="regisForm">
      <div className="title">Student Registeration Form</div>
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
        <ErrorWarning errorContent={error.Firstname} />
        <CustomInput
          title={'Middlename'}
          type={'text'}
          placeholder={'Middlename'}
          value={user.Middlename}
          onChange={(event) => {
            handleChange(event, 'Middlename');
          }}
        />
        <ErrorWarning errorContent={error.Middlename} />
        <CustomInput
          title={'Lastname'}
          type={'text'}
          placeholder={'Lastname'}
          value={user.Lastname}
          onChange={(event) => {
            handleChange(event, 'Lastname');
          }}
        />
        <ErrorWarning errorContent={error.Lastname} />
        <CustomSelect
          title="Course"
          dataOption={dataOption}
          value={user.Course}
          onChange={(event) => {
            handleChange(event, 'Course');
          }}
        />
        <ErrorWarning errorContent={error.Course} />

        <CustomRadio
          title="Gender"
          dataRadio={dataRadio}
          value={user.Gender}
          onChange={(event) => {
            handleChange(event, 'Gender');
          }}
        />
        <ErrorWarning errorContent={error.Gender} />

        <CustomInput
          title={'Phone'}
          type={'text'}
          placeholder={'phone no'}
          value={user.Phone}
          onChange={(event) => {
            handleChange(event, 'Phone');
          }}
        />
        <ErrorWarning errorContent={error.Phone} />

        <CustomTextarea
          title={'Current address'}
          placeholder={'Current address'}
          value={user.Address}
          onChange={(event) => {
            handleChange(event, 'Address');
          }}
        />
        <ErrorWarning errorContent={error.Address} />

        <CustomInput
          className={'fontbold'}
          title={'Email'}
          type={'email'}
          placeholder={'Enter email'}
          value={user.Email}
          onChange={(event) => {
            handleChange(event, 'Email');
          }}
        />
        <ErrorWarning errorContent={error.Email} />
        <CustomInput
          className={'fontbold'}
          title={'Password'}
          type={'password'}
          placeholder={'Enter Password'}
          value={user.Password}
          onChange={(event) => {
            handleChange(event, 'Password');
          }}
          errorContent={error.Password}
        />
        <ErrorWarning errorContent={error.Password} />
        <CustomInput
          className={'fontbold'}
          title={'Retype Password'}
          type={'password'}
          placeholder={'Retype Password'}
          value={user.Repassword}
          onChange={(event) => {
            handleChange(event, 'Repassword');
          }}
          errorContent={error.Repassword}
        />
        <ErrorWarning errorContent={error.Repassword} />
        <CustomButton
          nameBtn={'Register'}
          handleButton={(event) => {
            handleButton(event);
          }}
        />
      </form>
    </div>
  );
}

export default Register;
