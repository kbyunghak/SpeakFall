export const createSpeechRecognition = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  return SpeechRecognition ? new SpeechRecognition() : null;
};

export const stopSpeechSynthesis = () => {
  window.speechSynthesis?.cancel();
};

export const speakText = (text, language = 'en-US') => {
  if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
    return false;
  }

  stopSpeechSynthesis();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = language;
  window.speechSynthesis.speak(utterance);
  return true;
};
