import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  Home,
  Media,
  More,
  Politics,
  Popular,
  Science,
  Sport,
  Tech,
  Work,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/more" element={<More />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
