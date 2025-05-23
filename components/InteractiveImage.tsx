"use client";

import React, { useState } from 'react';

const InteractiveImage = ({ src, alt }) => {

  const [hueRotate, setHueRotate] = useState(0);  // 0-360

  const filterStyle = {
    filter: `hue-rotate(${hueRotate}deg)`,
  };

  return (
    <div className="p-4">
      <img className="w-1/2 mx-auto" src={src} alt={alt} style={filterStyle} />

      <div className="mt-4">
        <div className="flex justify-between">
          <span>色相旋转 (Hue Rotate):</span>
          <span className="ml-auto">{hueRotate}deg</span>
        </div>
        <label>
          <input
            className="w-full h-px"
            type="range"
            min="0"
            max="360"
            value={hueRotate}
            onChange={(e) => setHueRotate(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default InteractiveImage;