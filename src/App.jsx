import { useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import { Routes, Route } from "react-router-dom";
import TopVideos from "./components/TopVideos";
import VideoBox from "./components/VideoBox";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-900">
      {/* Show NavBar on all pages except VideoPlayer */}
      {!location.pathname.startsWith("/videos/") && <NavBar />}

      <main className="flex-1 flex flex-col w-full items-center justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideoBox />} />
          <Route path="/videos/:videoId" element={<VideoPlayer />} />
          <Route path="/top-videos" element={<TopVideos />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
