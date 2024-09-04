'use client'
import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Đảm bảo rằng CSS của Video.js được import

interface PlayerProps {
  techOrder: string[];
  autoplay: boolean;
  controls: boolean;
  sources: {
    src: string;
    type: string;
  }[];
}

const Player: React.FC<PlayerProps> = (props) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) return;

    const player = videojs(videoEl, props);

    player.ready(() => {
      player.src(props.sources);
      if (props.autoplay) {
        player.play();
      }
    });

    // return () => {
    //   player.dispose();
    // };
  }, [props, videoEl]);

  return (
    <div className="relative w-full h-full">
      <div data-vjs-player className="h-full w-full">
        <video
          ref={onVideo}
          className="video-js vjs-big-play-centered"
          playsInline
          style={{ width: "100%", height: "100%", position: "relative" }} // Đảm bảo video chiếm toàn bộ không gian
        />
      </div>
    </div>
  );
};

export default Player;
