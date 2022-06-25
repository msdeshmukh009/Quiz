const QuizBubble = ({ children }) => {
  return (
    <div className="bg-neutral-50 my-auto text-center rounded-full w-56 h-56 flex justify-center items-center text-[#FF3B3F] text-3xl p-2 font-bold">
      <h1>{children}</h1>
    </div>
  );
};

export { QuizBubble };
