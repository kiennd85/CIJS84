const CustomButton = ({ nameBtn, actSubmit }) => {
  return (
    <button
      type="submit"
      onClick={actSubmit}
    >
      {nameBtn}
    </button>
  );
};

export default CustomButton;
