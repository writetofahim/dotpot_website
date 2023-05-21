import React, { useEffect, useRef, useState } from "react";
import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import WaveSurfer from "wavesurfer.js";
import "./waveform.css"; // Import the CSS file

function WaveformPlayer({ audioUrl }) {
  const waveformRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const waveformInstance = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    waveformInstance.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "gray",
      progressColor: "black",
    });

    waveformInstance.current.load(audioUrl);

    // playButtonRef.current.addEventListener("click", handlePlay);
    // pauseButtonRef.current.addEventListener("click", handlePause);

    return () => {
      waveformInstance.current.destroy();
    };
  }, [audioUrl]);

  const handlePlay = () => {
    if (waveformInstance.current) {
      waveformInstance.current.play();
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (waveformInstance.current) {
      waveformInstance.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 mb-3">
        {isPlaying ? (
          <button
            onClick={handlePause}
            ref={pauseButtonRef}
            className="text-4xl"
          >
            <BsPauseCircleFill />
          </button>
        ) : (
          <button onClick={handlePlay} ref={playButtonRef} className="text-4xl">
            <BsFillPlayCircleFill />
          </button>
        )}
        <p>Listen this article</p>
      </div>
      <div ref={waveformRef}></div>
    </div>
  );
}

export default WaveformPlayer;
