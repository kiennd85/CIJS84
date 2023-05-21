const CustomTextarea = (props) => {
  const { title, placeholder } = props;

  return (
    <div>
      <div>{title}</div>
      <div>
        <textarea
          cols="30"
          rows="3"
          placeholder={placeholder}
        ></textarea>
      </div>
      <br />
    </div>
  );
};

export default CustomTextarea;
