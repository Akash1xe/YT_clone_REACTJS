import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  //jab bhi api call/network call kar rahe ho tab apko useEffect use karna hai

  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);

      dispatch(setHomeVideo(res?.data?.items));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideobyCategory = async () => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      console.log(result.data);
      dispatch(setHomeVideo(result?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchYoutubeVideo();
    } else {
      fetchVideobyCategory();
    }
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {video.map((item) => {
        return (
          <Link
            key={`${typeof item.id === "object" ? item.id.videoId : item.id}`}
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
          >
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
