import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { router, Stack } from 'expo-router';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
    return (
        <>

            <Stack.Screen
                options={{
                    title: 'AIA Assistant',
                }}
            />
            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }}>

                <View style={styles.overlay}>
                    {/* <Text style={styles.emoji}>🤖</Text> */}
                    <Image source={require('../assets/images/aialogo.png')} style={{ height: 150, width: 150, padding: 10 }} resizeMode="contain" />
                    <Text style={styles.title}>Welcome to AIA</Text>
                    <Text style={styles.subtitle}>Your AI-powered assistant</Text>

                    <TouchableOpacity style={styles.button} onPress={() => router.push('/ChatScreen')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    emoji: {
        fontSize: 60,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
