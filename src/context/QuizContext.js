import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import { QuizReducer, quizInitialState } from "../reducers";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(QuizReducer, quizInitialState);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    (async () => {
      try {
        quizDispatch({ type: "INITIALIZE" });

        const { status, data } = await axios.get(`${API_URL}/allQuizzes`);
        if (status === 200) {
          quizDispatch({ type: "SET_ALL_QUIZZES", payload: data });
        }
      } catch (err) {
        quizDispatch({ type: "SET_ERROR", payload: "Something went wrong!!" });
      }
    })();
  }, [API_URL, quizDispatch]);

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>{children}</QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
