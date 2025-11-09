import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  const spinnerClass = `loading-spinner loading-spinner--${size} loading-spinner--${color}`;
  
  return (
    <div className={spinnerClass} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;