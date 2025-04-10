import { Audio } from 'expo-av';

export const startRecording = async (): Promise<Audio.Recording | null> => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) {
        alert('Permission to access microphone is required!');
        return null;
      }
  
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
  
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync({
        android: {
          extension: '.wav',
          outputFormat: 1, 
          audioEncoder: 1, 
          sampleRate: 16000,
          numberOfChannels: 1,
          bitRate: 16000,
        },
        ios: {
          extension: '.wav',
          audioQuality: 96,
          sampleRate: 16000,
          numberOfChannels: 1,
          bitRate: 16000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {},
      });
      
      
  
      await recording.startAsync();
      return recording;
    } catch (error) {
      console.error('Failed to start recording:', error);
      return null;
    }
  };
  

export const stopRecording = async (recording: Audio.Recording): Promise<string | null> => {
  try {
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('stopRecording uri',uri)
    return uri || null;
  } catch (error) {
    console.error('Failed to stop recording:', error);
    return null;
  }
};
