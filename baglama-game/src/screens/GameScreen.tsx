import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import { Audio } from 'expo-av';
import Baglama from '../components/Baglama';
import Menu from '../components/Menu';
import RhythmSelector from '../components/RhythmSelector';
import { playBaglama, playRhythm } from '../utils/soundManager';

const { width, height } = Dimensions.get('window');

interface GameScreenProps {
  selectedInstrument: string;
  setSelectedInstrument: (instrument: string) => void;
  selectedRhythm: string;
  setSelectedRhythm: (rhythm: string) => void;
}

export default function GameScreen({
  selectedInstrument,
  setSelectedInstrument,
  selectedRhythm,
  setSelectedRhythm,
}: GameScreenProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [rhythmPlaying, setRhythmPlaying] = useState(false);
  const rhythmSoundRef = useRef<Audio.Sound | null>(null);

  const handlePlayRhythm = async () => {
    try {
      setRhythmPlaying(true);
      await playRhythm(selectedRhythm, rhythmSoundRef);
      setTimeout(() => setRhythmPlaying(false), 5000);
    } catch (error) {
      Alert.alert('Hata', 'Ritim çalınamadı');
      setRhythmPlaying(false);
    }
  };

  const handleStopRhythm = async () => {
    if (rhythmSoundRef.current) {
      await rhythmSoundRef.current.stopAsync();
      setRhythmPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Üst Kontrol Paneli */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(true)}
        >
          <Text style={styles.menuButtonText}>☰ MENU</Text>
        </TouchableOpacity>
        <Text style={styles.title}>BAĞLAMA ÇALMA</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Bağlama Enstrümanı */}
      <View style={styles.baglamaContainer}>
        <Baglama selectedInstrument={selectedInstrument} />
      </View>

      {/* Ritim Seçici ve Kontroller */}
      <View style={styles.controlPanel}>
        <RhythmSelector
          selectedRhythm={selectedRhythm}
          onSelectRhythm={setSelectedRhythm}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.rhythmButton, rhythmPlaying && styles.rhythmButtonActive]}
            onPress={handlePlayRhythm}
            disabled={rhythmPlaying}
          >
            <Text style={styles.rhythmButtonText}>
              {rhythmPlaying ? '⏸ RİTİM ÇALINIYOR' : '▶ RİTİMİ BAŞLAT'}
            </Text>
          </TouchableOpacity>

          {rhythmPlaying && (
            <TouchableOpacity
              style={styles.stopButton}
              onPress={handleStopRhythm}
            >
              <Text style={styles.stopButtonText}>⏹ DUR</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Menü Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Menu
            selectedInstrument={selectedInstrument}
            onSelectInstrument={setSelectedInstrument}
            onClose={() => setMenuVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  menuButton: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D2691E',
  },
  menuButtonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 60,
  },
  baglamaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  controlPanel: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingHorizontal: 15,
    paddingBottom: 25,
    paddingTop: 15,
    borderTopWidth: 2,
    borderTopColor: '#FFD700',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  rhythmButton: {
    flex: 1,
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF4500',
    alignItems: 'center',
  },
  rhythmButtonActive: {
    backgroundColor: '#FF4500',
    transform: [{ scale: 0.95 }],
  },
  rhythmButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stopButton: {
    backgroundColor: '#DC143C',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
});
