const quizInitialState = {
  isLoading: false,
  error: "",
  allQuizzes: [],
  questions: [],
  sessionId: "",
  responses: [],
};

const QuizReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, isLoading: true, error: "" };

    case "SET_ALL_QUIZZES":
      return { ...state, allQuizzes: action.payload, isLoading: false };

    case "SET_QUESTIONS":
      return { ...state, questions: action.payload, isLoading: false };

    case "START_SESSION":
      return { ...state, sessionId: action.payload.sessionId, responses: action.payload.responses };

    case "SET_RESPONSES":
      return { ...state, responses: action.payload };

    case "SET_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export { quizInitialState, QuizReducer };
