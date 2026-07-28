import {
  getFallSpeed,
  getLevelForScore,
  getMaxWordsByLevel,
  getPixelsPerFrame,
} from './vocabularyGame';

describe('vocabulary game utilities', () => {
  test('increases the level every 200 points up to level 10', () => {
    expect(getLevelForScore(0)).toBe(1);
    expect(getLevelForScore(199)).toBe(1);
    expect(getLevelForScore(200)).toBe(2);
    expect(getLevelForScore(5000)).toBe(10);
  });

  test('caps the number of falling words by level', () => {
    expect(getMaxWordsByLevel(1)).toBe(5);
    expect(getMaxWordsByLevel(10)).toBe(24);
    expect(getMaxWordsByLevel(99)).toBe(24);
  });

  test('calculates a positive falling speed', () => {
    expect(getFallSpeed(1)).toBe(240);
    expect(getFallSpeed(99)).toBe(30);
    expect(getPixelsPerFrame(1, 700)).toBeGreaterThan(0);
  });
});
