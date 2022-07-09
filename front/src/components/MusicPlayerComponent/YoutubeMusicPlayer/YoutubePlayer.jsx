import React from "react";
import YouTube from "react-youtube";

// https://developers.google.com/youtube/player_parameters

function YoutubePlayer() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId="5qap5aO4i9A" opts={opts} />;
}

export default YoutubePlayer;
