import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import CustomRadio from '../../Components/CustomRadio';
import CustomSelect from '../../Components/CustomSelect';
import CustomTextarea from '../../Components/CustomTextarea';
import ErrorWarning from '../../Components/ErrorWarning';
import CustomListUser from '../../Components/CustomListUser';
import './Form.css';
import useHookRegister from './useHook';
import Notice from '../../Components/Notice';

const dataOption = [
  { key: 0, name: 'Choose one course' },
  { key: 1, name: 'HTML' },
  { key: 2, name: 'CSS' },
  { key: 3, name: 'Javascript' },
];
const dataRadio = [
  { key: 0, name: 'gender', value: 1, label: 'Nam' },
  { key: 1, name: 'gender', value: 2, label: 'Nữ' },
];

function Register() {
  const { user, error, handleChange, addBtn, listUser, removeBtn, editBtn, btnType, updateBtn, cancelBtn, notice } = useHookRegister();

  return (
    <>
      <div className="regisForm">
        <div className="title">Form</div>
        <form>
          <CustomInput
            title={'Họ'}
            type={'text'}
            placeholder={'Họ'}
            value={user.Firstname}
            onChange={(event) => {
              handleChange(event, 'Firstname');
            }}
          />
          <ErrorWarning errorContent={error.Firstname} />

          <CustomInput
            title={'Tên'}
            type={'text'}
            placeholder={'Tên'}
            value={user.Lastname}
            onChange={(event) => {
              handleChange(event, 'Lastname');
            }}
          />
          <ErrorWarning errorContent={error.Lastname} />

          <CustomRadio
            title="Giới tính"
            dataRadio={dataRadio}
            value={user.Gender}
            onChange={(event) => {
              handleChange(event, 'Gender');
            }}
          />
          <ErrorWarning errorContent={error.Gender} />

          {btnType.type == 'Add' ? (
            <CustomButton
              nameBtn={'Thêm'}
              btnType={(event) => {
                addBtn(event);
              }}
            />
          ) : (
            <div className="frameBtn">
              <CustomButton
                classN={'frameUpdate'}
                nameBtn={'Cập nhật'}
                btnType={(event) => {
                  updateBtn(event, btnType.editUser);
                }}
              />
              <CustomButton
                classN={'frameUpdate'}
                nameBtn={'Hủy'}
                btnType={(event) => {
                  cancelBtn(event);
                }}
              />
            </div>
          )}
          <Notice
            content={notice.content}
            show={notice.show}
          />
          <CustomListUser
            listUser={listUser}
            removeBtn={removeBtn}
            editBtn={editBtn}
          />
        </form>
      </div>
    </>
  );
}

export default Register;
