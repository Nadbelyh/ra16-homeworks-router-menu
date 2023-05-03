import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu";
import HomePage from "./components/homePage";
import DriftPage from "./components/driftPage";
import ForzaPage from "./components/forzaPage";
import TimeAttackPage from "./components/timeAttackPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
