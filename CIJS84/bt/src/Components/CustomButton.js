const CustomButton = ({ nameBtn, handleButton }) => {
  return (
    <button
      type="button"
      onClick={handleButton}
    >
      {nameBtn}
    </button>
  );
};

export default CustomButton;
