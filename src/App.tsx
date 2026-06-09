import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PhotoSection } from "./pages/PhotoPage";
import { AudioPage } from "./pages/AudioPage";
import { DocumentPage } from "./pages/DocumentPage";
import { VideoPage } from "./pages/VideoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotoSection />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/docs" element={<DocumentPage />} />
        <Route path="/vids" element={<VideoPage />} />

      </Routes>
    </>
  );
}

export default App;
