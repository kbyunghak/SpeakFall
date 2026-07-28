import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage/HomePage';
import SentenceGamePage from './pages/SentenceGamePage/SentenceGamePage';
import VocabularyGamePage from './pages/VocabularyGamePage/VocabularyGamePage';
import PronunciationResourcesPage from './pages/PronunciationResourcesPage/PronunciationResourcesPage';

function App() {
  const [path, setPath] = useState(() => window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const pages = {
    '/': <HomePage />,
    '/sentence': <SentenceGamePage />,
    '/voca': <VocabularyGamePage />,
    '/pronunciationResources': <PronunciationResourcesPage />,
  };

  return (
    <div>
      <Header />
      <main>{pages[path] || <HomePage />}</main>
      <Footer />
    </div>
  );
}

export default App;
