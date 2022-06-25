import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuiz, useTimer } from "../../hooks";
import { Button } from "../button/Button";
import { Option } from "../option/Option";

const Question = ({ question, setCurrentQuestionIndex, isLastQuestion }) => {
  const { que, options } = question;

  const [selectedOptions, setSelectedOptions] = useState([]);
  const { updateResponses } = useQuiz();
  const { timeTaken, resetTimer } = useTimer();
  const navigate = useNavigate();

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
    navigate("/result");
  };

  return (
    <div className="bg-[#FFFFFF] rounded-xl h-4/5 sm:h-auto p-4 md:w-[65ch] w-full">
      <div>
        <h1 className="font-semibold text-xl">{que}</h1>
      </div>

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
          <Button onClickHandler={submitQuiz}>Submit</Button>
        ) : (
          <Button onClickHandler={nextQuestion}>Next</Button>
        )}
      </div>
    </div>
  );
};

export { Question };
