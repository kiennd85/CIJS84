function CustomInput(props) {
  const { className = null, title = null, type = null, placeholder = null, value = '', onChange = null, errorContent = '' } = props;
  const styleWarning = { color: 'red', height: '20px', fontSize: '0.8rem', paddingBottom: '15px', fontStyle: 'italic' };
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
    </div>
  );
}

export default CustomInput;
