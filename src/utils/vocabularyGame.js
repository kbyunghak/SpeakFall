export const SCORE_PER_WORD = 10;
export const SCORE_PER_LEVEL = 200;
export const MAX_LEVEL = 10;

export const getFallSpeed = (level) => Math.max(250 - level * 10, 30);

export const getPixelsPerFrame = (level, canvasHeight = 700) =>
  canvasHeight / (getFallSpeed(level) * 60);

export const getMaxWordsByLevel = (level) => {
  const limits = [5, 8, 10, 12, 14, 16, 18, 20, 22, 24];
  const index = Math.max(0, Math.min(level - 1, limits.length - 1));
  return limits[index];
};

export const getLevelForScore = (score) =>
  Math.min(Math.floor(score / SCORE_PER_LEVEL) + 1, MAX_LEVEL);
