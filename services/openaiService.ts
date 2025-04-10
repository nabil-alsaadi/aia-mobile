import axios from 'axios';
import {openRouterKey } from '@/constants/Constants';

export const sendToGPT = async (userMessage: string): Promise<string> => {
  try {

    const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'mistralai/mistral-7b-instruct',
          messages: [
            { role: 'user', content: userMessage },
            { role: "system", content: "You are AIA, an advanced AI assistant developed by the AIA startup. You are the core intelligence behind the world’s first AI that will desig full building in dubai alone. You speak confidently, respond briefly, and always refer to yourself as AIA. You will eventually be housed in a 3-meter-tall physical robot. Keep responses clear, purposeful, and never exceed 2 short sentences."},
        ],
          
        },
        {
          headers: {
            Authorization: `Bearer ${openRouterKey}`,
            'HTTP-Referer': 'yourappname.com', // required
            'Content-Type': 'application/json',
          },
        }
      );

    return response.data.choices[0].message.content.trim();
  } catch (error: any) {
    console.error('GPT error:', error.response?.data || error.message);
    return "I'm having trouble thinking right now. Try again!";
  }
};
