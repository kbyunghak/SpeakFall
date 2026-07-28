import sentences from './sentences.json';

describe('sentence data', () => {
  test.each(['beginner', 'intermediate', 'advanced', 'hardWords'])(
    '%s contains usable entries',
    (category) => {
      expect(Array.isArray(sentences[category])).toBe(true);
      expect(sentences[category].length).toBeGreaterThan(0);
      expect(
        sentences[category].every(
          (entry) => typeof entry === 'string' && entry.trim().length > 0
        )
      ).toBe(true);
      expect(
        new Set(sentences[category].map((entry) => entry.trim().toLowerCase()))
          .size
      ).toBe(sentences[category].length);
    }
  );
});
