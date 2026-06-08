import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PhotoSection } from "./pages/PhotoPage";
import { AudioPage } from "./pages/AudioPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotoSection />} />
        <Route path="/audio" element={<AudioPage />} />
      </Routes>
    </>
  );
}

export default App;
