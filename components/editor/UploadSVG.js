"use client";
// components/UploadSVG.js
import { useState } from "react";

function UploadSVG({ onUpload }) {
  const [svgContent, setSvgContent] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const text = await file.text();
    setSvgContent(text);
    onUpload(text);
  };

  return <input type="file" accept=".svg" onChange={handleUpload} />;
}

export default UploadSVG;
