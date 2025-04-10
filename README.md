# AIA Mobile

AIA is your AI-powered assistant built with **React Native (Expo)**. The app allows users to interact via text or voice using GPT for smart, human-like conversations.

## 🚀 Features

- 🎤 Voice input and transcription using **Deepgram**
- 🤖 Smart responses powered by **OpenAI GPT**
- 🗣️ Text-to-speech (TTS) using **Expo Speech**
- 📱 Clean UI with chat interface and animated assistant
- ⚙️ Built-in microphone recording with audio feedback

## 🛠️ Tech Stack

- **React Native** (via Expo)
- **TypeScript**
- **OpenAI API**
- **Deepgram API**
- **Expo Speech / AV**

## 📂 Folder Structure

```
- components/
  - InputRow.tsx
- services/
  - openaiService.ts
  - deepgramService.ts
  - voiceService.ts
- utilities/
  - speakUtility.ts
- screens/
  - HomeScreen.tsx
  - ChatScreen.tsx
- assets/
  - images/
- App.tsx
```

## 🔧 Setup

1. Clone the repo:

```bash
git clone https://github.com/yourusername/aia-mobile.git
cd aia-mobile
```

2. Install dependencies:

```bash
npm install
```

3. Add your API keys to `constants/Constants.ts`:

```ts
export const openaiKey = 'sk-...';
export const deepgramKey = 'dg_...';
```

4. Run the app:

```bash
npx expo start
```

> Make sure you have Expo Go installed on your device or emulator setup.

## 🧠 Usage

- Tap and hold the mic button to record your question
- Release to transcribe and get GPT response
- Or type directly into the input box

## 🤖 Example

```
User: What's the weather like today?
AIA: It looks sunny with a high of 28°C ☀️
```

## 📱 Screenshots

_(Add screenshots if needed)_

## 👨‍💻 Author

Nabil Alsaadi

- https://nabilalsaadi.com
- https://github.com/nabil-alsaadi

---

Made with ❤️ using Expo and AI ✨

