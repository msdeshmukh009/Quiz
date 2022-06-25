const ResultBox = ({ status, numberOfQuestions }) => {
  return (
    <div
      className={`${
        status === "correct" ? "bg-[#44B77B]" : "bg-[#FF3B3F]"
      } bg-opacity-10 flex gap-4 items-center p-4 rounded-md`}
    >
      <span
        className={`${status === "correct" ? "bg-[#44B77B]" : "bg-[#FF3B3F]"} rounded-full w-4 h-4`}
      ></span>
      <span>
        <span className="font-bold pr-2">{numberOfQuestions}</span>
        <span className="opacity-50">{status === "correct" ? "Correct" : "Incorrect"}</span>
      </span>
    </div>
  );
};
export { ResultBox };
