export const tokenize = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^a-z'\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

export const evaluatePronunciation = (expectedText, spokenText) => {
  const expectedWords = tokenize(expectedText);
  const spokenWords = tokenize(spokenText);
  let matchCount = 0;

  const feedback = expectedWords.map((word, index) => {
    const correct = spokenWords[index] === word;
    if (correct) matchCount += 1;
    return { word, correct };
  });

  const accuracy =
    expectedWords.length === 0
      ? 0
      : Math.round((matchCount / expectedWords.length) * 100);

  return { accuracy, feedback };
};

export const getSentenceAt = (sentencesByLevel, level, index = 0) => {
  const levelSentences = sentencesByLevel[level];

  if (!Array.isArray(levelSentences) || levelSentences.length === 0) {
    return '';
  }

  const normalizedIndex =
    ((index % levelSentences.length) + levelSentences.length) %
    levelSentences.length;

  return levelSentences[normalizedIndex];
};
