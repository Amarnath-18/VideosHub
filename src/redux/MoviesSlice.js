import { createSlice } from "@reduxjs/toolkit";

const VideosSlice = createSlice({
  name: "Videos",
  initialState: {
    videos: [],
    currentVideo: null,
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    }

  },
});

export const { setVideos , setCurrentVideo } = VideosSlice.actions;
export default VideosSlice.reducer;
