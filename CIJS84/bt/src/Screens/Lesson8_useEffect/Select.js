const Select = ({ dataOption, value, onChange }) => {
  return (
    <div>
      <div>
        <label>Giới tính</label>
        <select
          style={{ width: '100%', height: '35px', borderRadius: '5px' }}
          value={value}
          onChange={onChange}
        >
          {dataOption.map((item) => {
            return (
              <option
                key={item.key}
                value={item.value}
              >
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
