// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { vi } from 'vitest';

class SpeechRecognitionMock {
  start = vi.fn();
  stop = vi.fn();
  abort = vi.fn();
}

Object.defineProperty(window, 'SpeechRecognition', {
  configurable: true,
  writable: true,
  value: SpeechRecognitionMock,
});

Object.defineProperty(window, 'speechSynthesis', {
  configurable: true,
  writable: true,
  value: {
    cancel: vi.fn(),
    speak: vi.fn(),
  },
});

class SpeechSynthesisUtteranceMock {
  constructor(text) {
    this.text = text;
    this.lang = '';
  }
}

global.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;
window.SpeechSynthesisUtterance = SpeechSynthesisUtteranceMock;
