const CustomRadio = (props) => {
  const { title, dataRadio, value, onChange } = props;

  return (
    <div>
      <div>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {dataRadio.map((item) => {
          return (
            <div
              key={item.key}
              style={{ margin: '0 5px 0 5px' }}
            >
              <input
                type="radio"
                name={item.name}
                value={item.value}
                checked={value == item.value}
                onChange={onChange}
              />
              <label style={{ margin: '0 2px 0 2px' }}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomRadio;
