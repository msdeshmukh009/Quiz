import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { NavigationRoutes };
