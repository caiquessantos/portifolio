import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import NavbarSection from "./components/navbar/NavbarSection";
import Home from "./pages/Home";
import ExperienceDetails from "./pages/ExperienceDetails";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <NavbarSection />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/experiencia/:slug"
                element={<ExperienceDetails />}
              />
              <Route path="/projeto/:slug" element={<ProjectDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
