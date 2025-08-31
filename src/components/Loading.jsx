// src/components/LoadingSpinner.jsx
import React from "react";
import "../App.css";

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="spinner"></div>
        <h2>SwapIt</h2>
        <p>Loading your swapping experience...</p>
      </div>
    </div>
  );
}

export default Loading;