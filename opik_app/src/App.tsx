import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import EvaluationsPage from "./pages/evaluationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="list" element={<EvaluationsPage />} />
    </Routes>
  );
}

export default App;
