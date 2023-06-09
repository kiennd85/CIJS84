const CustomSelect = (props) => {
  const { title, dataOption, onChange, value } = props;

  return (
    <div>
      <div>
        <label style={{ paddingRight: '10px' }}>{title}</label>
        <select
          value={value}
          onChange={onChange}
        >
          {dataOption.map((item) => {
            return (
              <option
                key={item.key}
                value={item.key}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
