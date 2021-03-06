const Option = ({ option, clickHandler, selectedOptions }) => {
  const isSelected = selectedOptions.find(eachOption => eachOption.opt === option.opt);

  return (
    <label
      title={option.opt}
      className={`relative cursor-pointer flex gap-2 justify-start items-center bg-[#F3F4FA] py-6 px-2 rounded-md border-2 ${
        isSelected ? "border-[#35D299]" : ""
      }`}
    >
      <input
        checked={isSelected === undefined ? false : true}
        onChange={() => clickHandler(option)}
        className="hidden peer"
        type="checkbox"
      />
      <span className="relative block h-5 w-5 rounded-full bg-[#F3F4FA] border-2 border-[#000000] border-opacity-10 peer-checked:bg-[#35D299] after:content-[' '] after:hidden peer-checked:after:block after:absolute after:left-[6px] after:top-[3px] after:w-[5px] after:h-[10px] after:rotate-45 border-solid after:border-neutral-100 after:border-r-2 after:border-b-2"></span>
      {option.opt}
    </label>
  );
};

export { Option };
