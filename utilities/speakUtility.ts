import * as Speech from 'expo-speech';

export const speakAsAIA = (text: string) => {
  Speech.stop();
  const spoken = text.replace(/AIA/g, 'Aya');

  Speech.speak(spoken, {
    language: 'en-US',
    pitch: 1.1, // higher pitch for a more lively feel
    rate: 0.9, // slightly slower for clarity
    voice: 'com.apple.ttsbundle.Samantha-compact', // iOS-specific (you can choose a specific voice)
  });
};
