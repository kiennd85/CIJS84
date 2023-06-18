import Select from './Select';
import Search from './Search';
import useHook from './useHook';
import CustomListUser from '../../Components/CustomListUser';
import './SearchForm.css';

const ApiForm = () => {
  const { listUser, filter, removeBtn, editBtn, dataOption, handleChange } = useHook();

  return (
    <div id="Form">
      <div className="Form">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 20px 0' }}>
          <div className="select">
            <Select
              dataOption={dataOption}
              value={filter.filterGender}
              onChange={(event) => {
                handleChange(event, 'selectChange');
              }}
            ></Select>
          </div>

          <div className="search">
            <Search
              value={filter.filterSearch}
              onChange={(event) => {
                handleChange(event, 'searchChange');
              }}
            ></Search>
          </div>
        </div>

        <div>
          <CustomListUser
            listUser={listUser}
            removeBtn={removeBtn}
            editBtn={editBtn}
          ></CustomListUser>
        </div>
      </div>
    </div>
  );
};

export default ApiForm;
