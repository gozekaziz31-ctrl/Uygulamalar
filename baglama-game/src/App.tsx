import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import IntroScreen from './screens/IntroScreen';
import GameScreen from './screens/GameScreen';

const { width, height } = Dimensions.get('window');

type AppState = 'intro' | 'game' | 'menu';

export default function App() {
  const [appState, setAppState] = useState<AppState>('intro');
  const [selectedInstrument, setSelectedInstrument] = useState('baglama');
  const [selectedRhythm, setSelectedRhythm] = useState('halay');

  useEffect(() => {
    // Ses izinlerini ayarla
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: false,
          staysActiveInBackground: true,
        });
      } catch (error) {
        console.log('Audio setup error:', error);
      }
    };

    setupAudio();
  }, []);

  const handleStartGame = () => {
    setAppState('game');
  };

  const handleBackToMenu = () => {
    setAppState('game');
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      {appState === 'intro' ? (
        <IntroScreen onStart={handleStartGame} />
      ) : (
        <GameScreen
          selectedInstrument={selectedInstrument}
          setSelectedInstrument={setSelectedInstrument}
          selectedRhythm={selectedRhythm}
          setSelectedRhythm={setSelectedRhythm}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
