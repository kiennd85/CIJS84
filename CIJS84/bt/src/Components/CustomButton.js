const CustomButton = ({ nameBtn }) => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <button
      onClick={handleRegister}
      type="submit"
    >
      {nameBtn}
    </button>
  );
};

export default CustomButton;
