
import { sendToGPT } from '../services/openaiService';
import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,

} from 'react-native';
import { Audio } from 'expo-av';
import { startRecording, stopRecording } from '../services/voiceService';
import { transcribeWithDeepgram } from '../services/deepgramService';
import { speakAsAIA } from '@/utilities/speakUtility';
import InputRow from '@/components/InputRow';
import { Stack } from 'expo-router';
import * as Speech from 'expo-speech';


interface Message {
    from: 'user' | 'bot'; 
    text: string
}
export default function ChatScreen() {
    const [messages, setMessages] = useState<Message[]>([
    ]);
    const [input, setInput] = useState('');
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [recordingTime, setRecordingTime] = useState(0);
    const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(null);
    const flatListRef = useRef<FlatList>(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg:Message = { from: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        const thinkingMsg:Message = { from: 'bot', text: 'Thinking...' };
        setMessages(prev => prev.concat(thinkingMsg));

        const botResponse = await sendToGPT(input);

        setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { from: 'bot', text: botResponse };
            return updated;
        });
        speakAsAIA(botResponse)
    };


    const startMic = async () => {
        Speech.stop();
        if (recording) {
            console.warn('Already recording. Ignoring start.');
            return;
        }
        const newRecording = await startRecording();
        if (newRecording) {
            setRecording(newRecording);
            setRecordingTime(0);
            const t = setInterval(() => {
                setRecordingTime(prev => {
                    if (prev >= 29) {
                        stopMic(); // stop at 30s
                    }
                    return prev + 1;
                });
            }, 1000);
            setTimer(t);
        }
    };

    const stopMic = async () => {
        if (recording) {
            if (timer) clearInterval(timer);

            if (recordingTime < 2) {
                await recording.stopAndUnloadAsync();
                setRecording(null);
                setRecordingTime(0);
                
                return;
            }

            const uri = await stopRecording(recording) ?? "";

            

            setRecording(null);
            setRecordingTime(0);

            if (uri) {
                // const playback = new Audio.Sound();
                // await playback.loadAsync({ uri });
                // await playback.playAsync();
                
                const transcription = await transcribeWithDeepgram(uri);
                console.log('🎙️ Voice recorded at:', uri,transcription);
                if (transcription) {
                    const userMsg:Message = { from: 'user', text: transcription };
                    setMessages(prev => [...prev, userMsg]);

                    const thinkingMsg:Message = { from: 'bot', text: 'Thinking...' };
                    setMessages(prev => prev.concat(thinkingMsg));

                    const botResponse = await sendToGPT(transcription);

                    setMessages(prev => {
                        const updated = [...prev];
                        updated[updated.length - 1] = { from: 'bot', text: botResponse };
                        return updated;
                    });
                    
                    speakAsAIA(botResponse)
                }

                else {
                    Alert.alert('Transcription Failed', 'Could not transcribe the audio.');
                }
            }
        }
    };

    const renderItem = React.useCallback(({ item }:any) => (
        <Text style={item.from === 'user' ? styles.userMsg : styles.botMsg}>
            {item.text}
        </Text>
    ), []);

    // useEffect(() => {
    //     flatListRef.current?.scrollToOffset({ offset: Number.MAX_SAFE_INTEGER, animated: true });
    //   }, [messages]);

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'AIA Chat',
                    headerBackTitle: 'Home', // iOS back button label
                }}
            />

            <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 90}
            >
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
                <View style={{ flex: 1 }}>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ padding: 12 }}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="interactive"
                    scrollEnabled
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() =>
                        flatListRef.current?.scrollToOffset({ offset: Number.MAX_SAFE_INTEGER, animated: true })
                      }
                />

                <InputRow
                    input={input}
                    setInput={setInput}
                    onSend={handleSend}
                    onMicStart={startMic}
                    onMicStop={stopMic}
                    recording={!!recording}
                    recordingTime={recordingTime}
                />
                </View>
            {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>

        </>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f0f4f7', // light soft blue-gray
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: { flex: 1 },
    inputRow: {
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 30,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 8,
        height: 40
    },
    userMsg: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        padding: 10,
        borderRadius: 8,
        marginVertical: 4,
        maxWidth: '80%',
    },
    botMsg: {
        alignSelf: 'flex-start',
        backgroundColor: '#E6E6E6',
        padding: 10,
        borderRadius: 8,
        marginVertical: 4,
        maxWidth: '80%',
    },
    micButton: {
        padding: 8,
        backgroundColor: '#f3f3f3',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        marginLeft: 8,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
