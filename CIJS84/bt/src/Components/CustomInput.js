function CustomInput(props) {
  const { className = null, title = null, type = null, placeholder = null, value = '', onChange = null } = props;
  return (
    <div>
      <div className={className}>{title}</div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <br />
    </div>
  );
}

export default CustomInput;
