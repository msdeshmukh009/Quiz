import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuiz, useTimer } from "../../hooks";
import { Button } from "../button/Button";
import { Option } from "../option/Option";
import { ProgressRing } from "../progress-ring/ProgressRing";

const Question = ({
  question,
  setCurrentQuestionIndex,
  isLastQuestion,
  currentQuestionIndex,
  totalNumberOfQuestion,
}) => {
  const destructure = question => {
    if (question) {
      const { que, options, questionImage } = question;
      return { que, options, questionImage };
    } else {
      return {
        que: "",
        options: [],
      };
    }
  };

  const { que, options, questionImage } = destructure(question);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const { updateResponses } = useQuiz();
  const { timeTaken, resetTimer } = useTimer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!question) {
      navigate("/");
    }
  }, []);

  const handleOptions = currentOption => {
    if (selectedOptions.find(option => option.opt === currentOption.opt)) {
      setSelectedOptions(prevOptions =>
        prevOptions.filter(option => option.opt !== currentOption.opt)
      );
    } else {
      setSelectedOptions(prevOptions => [...prevOptions, currentOption]);
    }
  };

  const nextQuestion = () => {
    updateResponses({ que, selectedOptions, timeTaken });
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    resetTimer();
    setSelectedOptions([]);
  };

  const submitQuiz = async () => {
    updateResponses({ que, selectedOptions, timeTaken });
    navigate("/result", { replace: true });
  };

  return (
    <div className="bg-[#FFFFFF] rounded-xl h-4/5 sm:h-auto p-4 md:w-[65ch] mt-12 w-full relative">
      <div className="mt-[-50px] flex justify-center">
        <ProgressRing
          currentQuestionNumber={currentQuestionIndex + 1}
          totalNumberOfQuestion={totalNumberOfQuestion}
        />
      </div>

      <div className="mt-4">
        <h1 className="font-semibold text-xl">{que}</h1>
      </div>

      {questionImage ? (
        <div>
          <img className="w-full max-h-72 my-2" src={questionImage} alt="question-image" />
        </div>
      ) : null}

      <div className="flex flex-col gap-4 my-4">
        {options?.map(option => (
          <Option
            option={option}
            key={option.opt}
            clickHandler={handleOptions}
            selectedOptions={selectedOptions}
          />
        ))}
      </div>

      <div className="text-center">
        {isLastQuestion ? (
          <Button disableCondition={selectedOptions.length <= 0} onClickHandler={submitQuiz}>
            Submit
          </Button>
        ) : (
          <Button disableCondition={selectedOptions.length <= 0} onClickHandler={nextQuestion}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export { Question };
