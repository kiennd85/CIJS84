function CustomInput(props) {
  const { className = null, title = null, type = null, placeholder = null } = props;
  return (
    <div>
      <div className={className}>{title}</div>
      <div>
        <input
          type={type}
          placeholder={placeholder}
        />
      </div>
      <br />
    </div>
  );
}

export default CustomInput;
