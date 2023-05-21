const CustomRadio = (props) => {
  const { title, dataRadio } = props;

  return (
    <div>
      <div>{title}</div>
      {dataRadio.map((item, index) => {
        return (
          <div>
            <input
              type="radio"
              name={item.name}
              value={item.value}
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
