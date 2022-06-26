import { useState } from "react";
import { Question } from "../../components";
import { useQuiz } from "../../hooks";

const QuestionPage = () => {
  const {
    quizState: { questions },
  } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <main className="bg-[#AF9CF3] min-h-screen flex justify-center sm:p-8 items-center flex-col">
      <Question
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        question={questions[currentQuestionIndex]}
        isLastQuestion={questions.length - 1 === currentQuestionIndex ? true : false}
        currentQuestionIndex={currentQuestionIndex}
        totalNumberOfQuestion={questions.length}
      />
    </main>
  );
};

export { QuestionPage };
