const CustomSelect = (props) => {
  const { title, dataSelect } = props;

  return (
    <div>
      <div>
        <label>{title}</label>
        <select>
          {dataSelect.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value}
              >
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <br />
    </div>
  );
};

export default CustomSelect;
