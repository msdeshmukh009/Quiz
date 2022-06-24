const QuizBubble = ({ children }) => {
  return (
    <div className="bg-neutral-50 rounded-full w-56 h-56 flex justify-center items-center text-[#FF3B3F] text-4xl font-bold">
      <h1>{children}</h1>
    </div>
  );
};

export { QuizBubble };
