const CustomTextarea = (props) => {
  const { title, placeholder, value = '', onChange = null, errorContent = '' } = props;

  return (
    <div>
      <div>{title}</div>
      <div>
        <textarea
          cols="30"
          rows="3"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default CustomTextarea;
