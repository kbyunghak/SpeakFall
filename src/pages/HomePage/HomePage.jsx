import React from 'react';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>SpeakFall</h1>
      <p>Speak. Score. Improve.</p>
      <div>
        <a href="#/sentence">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              margin: '10px'
            }}
          >
            Sentence Practice
          </button>
        </a>
        <a href="#/voca">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              margin: '10px'
            }}
          >
            Play Word Fall
          </button>
        </a>

        <a href="#/pronunciationResources">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              margin: '10px'
            }}
          >
            Learning Resources
          </button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
