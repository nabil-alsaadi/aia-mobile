import { deepgramKey } from '@/constants/Constants';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';


export const transcribeWithDeepgram = async (audioUri: string): Promise<string> => {
  const apiKey = deepgramKey;
  console.log('transcribeWithDeepgram')
  try {
    // Download the file as binary
    const fileBinary = await FileSystem.readAsStringAsync(audioUri, {
      encoding: FileSystem.EncodingType.Base64, // Base64 first
    });

    const audioBuffer = Buffer.from(fileBinary, 'base64'); 

    const response = await axios.post(
      'https://api.deepgram.com/v1/listen',
      audioBuffer,
      {
        headers: {
          'Authorization': `Token ${apiKey}`,
          'Content-Type': 'audio/wav', 
        },
      }
    );
    console.log('transcribeWithDeepgram res[onse',response)
    const transcript = response.data.results.channels[0].alternatives[0].transcript;
    return transcript;
  } catch (error: any) {
    console.log('Deepgram STT error:', error.response?.status, error.response?.data || error.message);
    return '';
  }
};
