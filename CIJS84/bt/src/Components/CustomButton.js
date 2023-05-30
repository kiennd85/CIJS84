const CustomButton = ({ nameBtn, btnType }) => {
  return (
    <button
      type="button"
      onClick={btnType}
    >
      {nameBtn}
    </button>
  );
};

export default CustomButton;
