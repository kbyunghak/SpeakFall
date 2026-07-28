import React from 'react';

const headerStyle = {
  backgroundColor: '#1976d2',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  borderBottom: '2px solid #ccc',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
};

function Header() {
  return (
    <nav aria-label="Main navigation" style={headerStyle}>
      <a href="#/" style={linkStyle}>🏠 Home</a>
      <a href="#/sentence" style={linkStyle}>🗣 Sentence</a>
      <a href="#/voca" style={linkStyle}>🎮 Word Fall</a>
      <a href="#/pronunciationResources" style={linkStyle}>🧠 Learning Resources</a>
    </nav>
  );
}

export default Header;
