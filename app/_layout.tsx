import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')} 
      style={styles.background}
      resizeMode="cover"
    >

      <Stack
        screenOptions={{
          headerShown: true,
          animation: 'none',
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
