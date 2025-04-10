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


# AIA Mobile

AIA is a voice-enabled conversational assistant built with React Native and Expo.

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

Because AIA uses custom native modules (e.g., `expo-av`, `expo-speech`, `expo-file-system`), it requires a development build — **not Expo Go**.

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

## 🧪 Project Features
- Voice recording and transcription (using Deepgram)
- Chat interface powered by GPT
- Speech synthesis (using `expo-speech`)
- Works offline after build

---

## 🛠 Tech Stack
- **React Native**
- **Expo** (with Dev Client)
- **Expo Router**
- **Deepgram** (Speech to Text)
- **OpenAI** (Chat responses)

---

## 📦 Build Notes
This project uses:
- `expo-dev-client` to enable native modules
- `expo-av` for audio
- `expo-speech` for TTS
- `expo-file-system` for file access

If you want to generate a standalone `.apk` or `.ipa` for sharing:
```bash
eas build --profile development --platform ios
```

---

## 🔗 Contact
For questions or help: [nabil.biloo.alsaadi95@gmail.com](mailto:nabil.biloo.alsaadi95@gmail.com)



