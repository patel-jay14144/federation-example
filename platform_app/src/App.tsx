import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Layout from "./layout";
import RemoteWrapper from "./remoteWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<HomePage />} />} />
        <Route
          path="/eval/*"
          element={
            <Layout children={<RemoteWrapper remote="eval" module="eval" />} />
          }
        />
        <Route
          path="/data-morgana/*"
          element={
            <Layout
              children={
                <RemoteWrapper remote="data-morgana" module="data-morgana" />
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
