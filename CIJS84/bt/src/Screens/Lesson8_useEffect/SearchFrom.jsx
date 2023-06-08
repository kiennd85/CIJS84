import Select from './Select';
import Search from './Search';
import useHook from './useHook';
import CustomListUser from '../../Components/CustomListUser';
import './SearchForm.css';

const SearchForm = () => {
  const { listUser, removeBtn, editBtn, dataOption, handleSelect } = useHook();

  return (
    <div id="Form">
      <div className="Form">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0 20px 0' }}>
          <div className="select">
            <Select
              dataOption={dataOption}
              // value={}
              onChange={(event) => {
                handleSelect(event);
              }}
            ></Select>
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </div>
        <div>
          {/* <Table listUser={listUser}></Table> */}
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

export default SearchForm;
