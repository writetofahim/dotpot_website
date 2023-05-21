import React, { useEffect, useRef, useState } from "react";

const UploadAudio = ({ prevAudio, selectedFile, setSelectedFile }) => {
  //   const [selectedFile, setSelectedFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioInputRef = useRef(null);

  useEffect(() => {
    setAudioUrl(prevAudio);
  }, [prevAudio]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const audioURL = URL.createObjectURL(file);
      setAudioUrl(audioURL);
    } else {
      setAudioUrl(null);
    }
  };

  const handleRemove = () => {
    setAudioUrl(null);
    setSelectedFile(null);
    audioInputRef.current.value = null;
  };

  return (
    <div>
      <label htmlFor="blog-audio" className="font-bold block mb-2">
        Upload Audio
      </label>
      <input
        id="blog-audio"
        ref={audioInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
      />
      {audioUrl && (
        <div className="flex gap-2 mt-3">
          <audio controls className="w-4/5">
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <button className="text-red-500" onClick={handleRemove}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadAudio;
