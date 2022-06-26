import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactSpeedometer from "react-d3-speedometer";
import * as d3 from "d3";
import { Button, ResultBox } from "../../components";
import { useQuiz } from "../../hooks";

const ResultPage = () => {
  const {
    quizState: { responses },
    startAgain,
  } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (!responses.length) {
      navigate("/");
    }
  }, [responses.length, navigate]);

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
    {
      correct: 0,
      incorrect: 0,
      getAccuracy() {
        return this.correct / (this.correct + this.incorrect);
      },
    }
  );

  return (
    <main className="bg-[#AF9CF3] min-h-screen flex justify-center sm:p-8 items-center flex-col">
      <div className="bg-[#FFFFFF] rounded-xl h-4/5 sm:h-auto p-4 md:w-[65ch] w-full">
        <div>
          <h1 className="font-semibold text-xl text-center">Your Result</h1>
        </div>

        <div className="w-full h-80 m-auto">
          <ReactSpeedometer
            minValue={0}
            maxValue={1}
            endColor="#44B77B"
            startColor="#FF3B3F"
            needleColor="#AF9CF3"
            valueTextFontSize={"32px"}
            valueTextFontWeight={700}
            height={150}
            valueFormat={d3.format(".0%")}
            value={result.getAccuracy()}
            fluidWidth={true}
          />
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
