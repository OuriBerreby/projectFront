import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TaskBoard from "./Pages/TaskBoard";
import Blog from "./Pages/Blog";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskBoard" element={<TaskBoard />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
