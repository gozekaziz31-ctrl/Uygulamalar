import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { playBaglama } from '../utils/soundManager';

const { width, height } = Dimensions.get('window');

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Intro animasyonu
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();

    // Otomatik bağlama introsu çal
    const playIntro = async () => {
      setIsPlaying(true);
      await playBaglama('intro');
      setIsPlaying(false);
    };

    const timer = setTimeout(playIntro, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>🎸</Text>
        <Text style={styles.mainTitle}>BAĞLAMA ÇALMA</Text>
        <Text style={styles.subtitle}>Oyunu</Text>
        <Text style={styles.description}>
          Gerçekçi bağlama sesleri ile müzik yapın
        </Text>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isPlaying && styles.buttonPlaying]}
          onPress={async () => {
            setIsPlaying(true);
            await playBaglama('intro');
            setIsPlaying(false);
          }}
          disabled={isPlaying}
        >
          <Text style={styles.buttonText}>
            {isPlaying ? '🔊 İntro Çalınıyor...' : '🔊 İntro Dinle'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Text style={styles.startButtonText}>🎮 OYUNA BAŞLA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 80,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 28,
    color: '#FFA500',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D2691E',
    alignItems: 'center',
  },
  buttonPlaying: {
    backgroundColor: '#A0522D',
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  startButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#FFA500',
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
