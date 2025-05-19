import { yt_api_key } from "../Constrains";

export const FetchVideos = async (searchQuery) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchQuery}&videoDuration=medium&key=${yt_api_key}`
  );
  const data = await response.json();
  console.log(data);
  return data.items;
};

