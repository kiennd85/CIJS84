const CustomRadio = (props) => {
  const { title, dataRadio, value, onChange } = props;

  return (
    <div>
      <div>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {dataRadio.map((item) => {
          return (
            <div key={item.key}>
              <input
                type="radio"
                name={item.name}
                value={item.value}
                checked={value === item.value}
                onChange={onChange}
              />
              <label>{item.value}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomRadio;
