const CustomRadio = (props) => {
  const { title, dataRadio, value, onChange } = props;

  return (
    <div>
      <div>{title}</div>
      {dataRadio.map((item) => {
        return (
          <div>
            <input
              key={item.key}
              type="radio"
              name={item.name}
              value={item.value}
              onChange={onChange}
            />
            <label>{item.value}</label>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default CustomRadio;
