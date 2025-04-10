import React, { useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function InputRow({
  input,
  setInput,
  onSend,
  onMicStart,
  onMicStop,
  recording,
  recordingTime,
}: {
  input: string;
  setInput: (text: string) => void;
  onSend: () => void;
  onMicStart: () => void;
  onMicStop: () => void;
  recording: boolean;
  recordingTime: number;
}) {


  return (
    <View style={styles.inputRow}>
      <TouchableOpacity
        onPressIn={onMicStart}
        onPressOut={onMicStop}
        style={styles.micButton}
      >
        <Ionicons name="mic" size={28} color={recording ? 'red' : 'gray'} />
      </TouchableOpacity>

      {recording && (
        <Text style={styles.timerText}>
          {`00:${String(recordingTime).padStart(2, '0')}`}
        </Text>
      )}

      <TextInput
        placeholder="Type or speak..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <TouchableOpacity onPress={onSend} style={{ paddingLeft: 10 }}>
        <Ionicons name="send" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(InputRow);

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: Platform.OS =='ios' ? 30 : 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'rgba(255,255,255,0.9)', // transparent white
    marginBottom: Platform.OS =='ios' ? 0 : 0
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 8,
    height: 40,
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
