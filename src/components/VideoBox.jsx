import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VideoList from './VideoList';

const VideoBox = () => {
    const videos = useSelector((state) => state.Videos.videos);
  const navigate = useNavigate();

  useEffect(() => {
    if (videos.length === 0) {
      console.log("No Videos found");
      navigate("/");
    }
  }, [videos, navigate]);
  return (
    <div>
        <VideoList videos={videos} />
    </div>
  )
}

export default VideoBox