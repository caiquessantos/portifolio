import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ExperienceDetails from "./pages/ExperienceDetails";
import ProjectsDetails from "./pages/ProjectsDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia/:slug" element={<ExperienceDetails />} />
          <Route path="/projeto/:slug" element={<ProjectsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
