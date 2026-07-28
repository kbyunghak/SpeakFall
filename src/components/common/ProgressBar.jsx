import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div
      aria-label="Loading progress"
      style={{
        width: '80%',
        backgroundColor: '#eee',
        borderRadius: '5px',
        margin: '20px auto',
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: '#4caf50',
          borderRadius: '5px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
}

export default ProgressBar;
