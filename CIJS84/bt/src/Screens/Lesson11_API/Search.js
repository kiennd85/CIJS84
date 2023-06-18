const Search = ({ value, onChange }) => {
  return (
    <div>
      <div>
        <label>Tìm kiếm</label>
        <input
          style={{ width: '100%', height: '35px', borderRadius: '5px' }}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default Search;
