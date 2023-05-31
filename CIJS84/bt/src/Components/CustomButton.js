const CustomButton = ({ nameBtn, btnType, classN }) => {
  return (
    <div className={classN}>
      <button
        className="btn btnAdd"
        type="button"
        onClick={btnType}
      >
        {nameBtn}
      </button>
    </div>
  );
};

export default CustomButton;
