import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { QuizContext } from "../context";

const useQuiz = () => {
  const { quizState, quizDispatch } = useContext(QuizContext);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const startQuiz = async quizId => {
    try {
      quizDispatch({ type: "INITIALIZE" });

      const { status, data } = await axios.get(`${API_URL}/quizzes/${quizId}`);
      if (status === 200) {
        quizDispatch({ type: "SET_QUESTIONS", payload: data.questions });

        const { status, data: sessionData } = await axios.post(
          `${process.env.REACT_APP_API_URL}/responses`,
          {}
        );

        if (status === 201) {
          quizDispatch({
            type: "START_SESSION",
            payload: { sessionId: sessionData.id, responses: sessionData.responses },
          });
        }

        navigate("/question");
      }
    } catch (err) {
      quizDispatch({ type: "SET_ERROR", payload: "Something went wrong!!" });
    }
  };

  const updateResponses = async ({ que, selectedOptions, timeTaken }) => {
    try {
      const { status, data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/responses/${quizState.sessionId}`,
        {
          responses: [
            ...quizState.responses,
            { que, selectedOptions, timeTaken: timeTaken.current },
          ],
        }
      );

      if (status === 200) {
        quizDispatch({ type: "SET_RESPONSES", payload: data.responses });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startAgain = async () => {
    try {
      const { status, data: sessionData } = await axios.post(
        `${process.env.REACT_APP_API_URL}/responses`,
        {}
      );

      if (status === 201) {
        quizDispatch({
          type: "START_SESSION",
          payload: { sessionId: sessionData.id, responses: sessionData.responses },
        });
      }

      navigate("/question");
    } catch (err) {
      console.log(err);
    }
  };

  return { quizState, startQuiz, quizDispatch, startAgain, updateResponses };
};

export { useQuiz };
