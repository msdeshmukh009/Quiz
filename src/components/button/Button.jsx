const Button = ({ children, onClickHandler, disableCondition }) => {
  return (
    <button
      onClick={onClickHandler}
      disabled={disableCondition}
      className="bg-[#FF3B3F] hover:bg-red-500 active:bg-red-700 disabled:cursor-not-allowed text-neutral-100 p-2 rounded-[5rem] text-lg font-semibold w-52"
    >
      {children}
    </button>
  );
};

export { Button };
