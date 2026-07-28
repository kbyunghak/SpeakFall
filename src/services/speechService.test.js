import {
  createSpeechRecognition,
  speakText,
  stopSpeechSynthesis,
} from './speechService';

describe('speech service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('creates the available speech recognition implementation', () => {
    const recognition = createSpeechRecognition();
    expect(recognition).not.toBeNull();
    expect(recognition.start).toEqual(expect.any(Function));
  });

  test('returns null when speech recognition is unavailable', () => {
    const original = window.SpeechRecognition;
    window.SpeechRecognition = undefined;
    window.webkitSpeechRecognition = undefined;

    expect(createSpeechRecognition()).toBeNull();

    window.SpeechRecognition = original;
  });

  test('speaks text in the requested language', () => {
    expect(speakText('hello', 'en-CA')).toBe(true);
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
    expect(window.speechSynthesis.speak).toHaveBeenCalledWith(
      expect.objectContaining({ text: 'hello', lang: 'en-CA' })
    );
  });

  test('cancels active speech', () => {
    stopSpeechSynthesis();
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
  });
});
