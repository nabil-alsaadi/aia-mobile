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

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/aia-mobile.git
cd aia-mobile
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install the development build

To install the dev build on iOS:
```bash
npx expo run:ios
```
Or for Android:
```bash
npx expo run:android
```

### 4. Start the development server
```bash
npx expo start
```
This will open the Expo Dev Tools in your browser. Scan the QR code with the custom dev app installed on your device/simulator.

---

## 🧠 Usage

- Tap and hold the mic button to record your question
- Release to transcribe and get GPT response
- Or type directly into the input box

## 🤖 Example

```
User: What's the weather like today?
AIA: It looks sunny with a high of 28°C ☀️
```

## 👨‍💻 Author

Nabil Alsaadi

- https://nabilalsaadi.com
- https://github.com/nabil-alsaadi

---

Made with ❤️ using Expo and AI ✨