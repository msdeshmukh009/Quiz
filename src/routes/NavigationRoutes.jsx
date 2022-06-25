import { Routes, Route } from "react-router-dom";
import { Home, QuestionPage, ResultPage } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export { NavigationRoutes };
