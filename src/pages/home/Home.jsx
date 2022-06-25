import { Button, QuizBubble } from "../../components";
import { useQuiz } from "../../hooks";

const Home = () => {
  const {
    quizState: { allQuizzes, isLoading },
    startQuiz,
  } = useQuiz();

  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%)",
        backgroundBlendMode: "multiply",
      }}
      className="min-h-screen flex justify-between p-8 items-center flex-col"
    >
      <div className="w-48">
        <img className="w-full" src="/Horizontal-Logo---Full-Colour-3x.png" alt="upraised logo" />
      </div>

      {allQuizzes.map(({ id, quizName }) => (
        <div className="h-[80vh] flex flex-col items-center justify-between" key={id}>
          <QuizBubble>{quizName}</QuizBubble>
          {isLoading ? (
            <Button>Getting Ready...</Button>
          ) : (
            <Button onClickHandler={() => startQuiz(id)}>Start</Button>
          )}
        </div>
      ))}
    </div>
  );
};

export { Home };
