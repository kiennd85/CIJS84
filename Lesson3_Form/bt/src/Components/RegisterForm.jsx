import CustomInput from './CustomInput';
import './Form.css';

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

        <div>
          <div>
            <label>Course: </label>
            <select>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
            </select>
          </div>
          <br />
        </div>
        <div>Gender:</div>
        <input
          type="radio"
          name="gender"
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
        />
        <label>Female</label>
        <br />
        <br />

        <CustomInput
          title={'Phone'}
          type={'number'}
          placeholder={'phone no'}
        />

        <div>Current Address:</div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Current address"
          ></textarea>
        </div>
        <br />

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

        <button class="registerBtn">Register</button>
      </form>
    </div>
  );
}

export default Register;
