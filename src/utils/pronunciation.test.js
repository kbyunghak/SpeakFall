import {
  evaluatePronunciation,
  getSentenceAt,
  tokenize,
} from './pronunciation';

describe('pronunciation utilities', () => {
  test('normalizes case and punctuation', () => {
    expect(tokenize("Hello, WORLD! It's me.")).toEqual([
      'hello',
      'world',
      "it's",
      'me',
    ]);
  });

  test('calculates accuracy and word feedback', () => {
    expect(evaluatePronunciation('The quick fox', 'the slow fox')).toEqual({
      accuracy: 67,
      feedback: [
        { word: 'the', correct: true },
        { word: 'quick', correct: false },
        { word: 'fox', correct: true },
      ],
    });
  });

  test('returns zero accuracy for empty expected text', () => {
    expect(evaluatePronunciation('', 'anything')).toEqual({
      accuracy: 0,
      feedback: [],
    });
  });

  test('selects sentences safely and wraps the index', () => {
    const data = { beginner: ['one', 'two'] };
    expect(getSentenceAt(data, 'beginner', 2)).toBe('one');
    expect(getSentenceAt(data, 'beginner', -1)).toBe('two');
    expect(getSentenceAt(data, 'missing', 0)).toBe('');
  });
});
