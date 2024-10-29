"use client";
// components/Controls.js
import { useState } from "react";

function Controls({ onChange }) {
  const [depth, setDepth] = useState(1);
  const [bevelEnabled, setBevelEnabled] = useState(true);
  const [bevelSize, setBevelSize] = useState(0.1);

  const handleDepthChange = (e) => {
    const value = parseFloat(e.target.value);
    setDepth(value);
    onChange({ depth: value, bevelEnabled, bevelSize });
  };

  // Similar handlers for bevelEnabled and bevelSize...

  return (
    <div>
      <label>
        Depth:
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={depth}
          onChange={handleDepthChange}
        />
      </label>
      {/* Add controls for bevelEnabled and bevelSize */}
    </div>
  );
}

export default Controls;
