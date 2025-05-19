import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../redux/MoviesSlice";
import { useNavigate, Link } from "react-router-dom";
import { FetchVideos } from "../action/FetchVideos";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  const fetchSuggestions = useCallback(async () => {
    if (searchQuery.length > 2) {
      setIsLoading(true);
      try {
        // Use your local proxy server instead of directly calling Google's API
        const response = await fetch(`http://localhost:3001/api/suggestions?q=${searchQuery}`);
        const data = await response.json();
        setSuggestions(data[1] || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
      setIsLoading(false);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, fetchSuggestions]);

  const handleSearch = async () => {
    if (searchQuery) {
      const movies = await FetchVideos(searchQuery);
      dispatch(setVideos(movies));
      navigate("/videos");
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") setSelectedIndex(Math.min(selectedIndex + 1, suggestions.length - 1));
    if (e.key === "ArrowUp") setSelectedIndex(Math.max(selectedIndex - 1, 0));
    if (e.key === "Enter" && selectedIndex >= 0) handleSearch();
  };

  const startVoiceSearch = () => {
    recognition.start();
    recognition.onresult = (event) => setSearchQuery(event.results[0][0].transcript);
  };

  const highlightText = (text) => {
    const query = searchQuery.toLowerCase();
    return text.split(new RegExp(`(${query})`, "gi")).map((part, index) =>
      part.toLowerCase() === query ? <span key={index} className="text-blue-400 font-semibold">{part}</span> : part
    );
  };

  return (
    <nav className="w-full px-2 sm:px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          onClick={() => dispatch(setVideos([]))}
          to="/"
          className="text-2xl sm:text-3xl font-extrabold text-blue-400 hover:text-blue-300 transition-transform whitespace-nowrap"
        >
          VideosHub
        </Link>

        {/* Search Group */}
        <div className="flex-1 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-3xl">
          <div className="relative w-full">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border border-gray-600 bg-gray-700 rounded-full px-6 py-3 w-full text-white focus:outline-none placeholder-gray-400"
              placeholder="Search videos..."
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            )}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 w-full bg-gray-700 border border-gray-600 rounded-lg mt-2 shadow-lg max-h-52 overflow-y-auto z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => { setSearchQuery(suggestion); handleSearch(); }}
                    className={`px-6 py-3 cursor-pointer ${index === selectedIndex ? "bg-gray-600" : "hover:bg-gray-600"}`}
                  >
                    {highlightText(suggestion)}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition-all whitespace-nowrap"
          >
            Search
          </button>
          <button
            onClick={startVoiceSearch}
            className="p-3 bg-green-500 hover:bg-green-400 text-white rounded-full flex items-center justify-center"
            title="Voice Search"
          >
            🎤
          </button>
        </div>

        {/* Top Videos Link */}
        <button
          onClick={() => navigate("/top-videos")}
          className="text-lg font-semibold px-4 py-2 rounded-full hover:text-blue-400 hover:bg-gray-700 transition-all whitespace-nowrap mt-2 sm:mt-0"
        >
          Top Videos
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
