const Button = ({ children }) => {
  return (
    <button className="bg-[#FF3B3F] hover:bg-red-500 active:bg-red-700 text-neutral-100 p-2 rounded-[5rem] text-lg font-semibold w-52">
      {children}
    </button>
  );
};

export { Button };
