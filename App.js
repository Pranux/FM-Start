import React, { useState } from "react";

const App = () => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div
      style={{
        color: "black",
        background: "linear-gradient(45deg, yellow, orange)",
        minHeight: "100vh", // Set the minimum height of the div to fill the viewport
      }}
    >
      <h1 style={{ color: "black" }}>START FM</h1>
      <iframe
        title="HearThis Live Stream"
        src="https://hearthis.at/startfm/embedlive/"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="0"
        allow="autoplay"
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default App;
