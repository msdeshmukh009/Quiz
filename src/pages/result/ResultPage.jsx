import { Button, ResultBox } from "../../components";
import { useQuiz } from "../../hooks";

const ResultPage = () => {
  const {
    quizState: { responses },
    startAgain,
  } = useQuiz();

  const result = responses.reduce(
    (finalResult, response) => {
      let isAllResponsesCorrect = true;

      response.selectedOptions.forEach(eachResponse => {
        if (!eachResponse.isCorrect) {
          isAllResponsesCorrect = false;
        }
      });

      return isAllResponsesCorrect
        ? { ...finalResult, correct: ++finalResult.correct }
        : { ...finalResult, incorrect: ++finalResult.incorrect };
    },
    { correct: 0, incorrect: 0 }
  );

  return (
    <main className="bg-[#AF9CF3] min-h-screen flex justify-center sm:p-8 items-center flex-col">
      <div className="bg-[#FFFFFF] rounded-xl h-4/5 sm:h-auto p-4 md:w-[65ch] w-full">
        <div>
          <h1 className="font-semibold text-xl text-center">Your Result</h1>
        </div>

        <div className="flex flex-col gap-2 my-2">
          <ResultBox status="correct" numberOfQuestions={result.correct} />
          <ResultBox status="incorrect" numberOfQuestions={result.incorrect} />
        </div>

        <div className="text-center my-2">
          <Button onClickHandler={startAgain}>Start again</Button>
        </div>
      </div>
    </main>
  );
};

export { ResultPage };