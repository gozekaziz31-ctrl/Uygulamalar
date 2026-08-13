import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import { playBaglama } from '../utils/soundManager';

const { width } = Dimensions.get('window');

interface Baglama Props {
  selectedInstrument: string;
}

const STRINGS = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
const COLORS = ['#FF6B6B', '#FF8E72', '#FFA07A', '#FFD700', '#98D8C8', '#6BCB77', '#4D96FF'];

export default function Baglama({ selectedInstrument }: Baglama Props) {
  const [pressedString, setPressedString] = useState<string | null>(null);

  const handleStringPress = async (stringName: string, index: number) => {
    setPressedString(stringName);
    await playBaglama(stringName);
    setTimeout(() => setPressedString(null), 200);
  };

  return (
    <View style={styles.container}>
      {/* Bağlama Resmi/Gösterimi */}
      <View style={styles.baglamaBody}>
        <View style={styles.bodyBack}>
          <Text style={styles.bodyText}>🎸</Text>
        </View>
      </View>

      {/* Teller */}
      <View style={styles.stringsContainer}>
        {STRINGS.map((stringName, index) => (
          <TouchableOpacity
            key={stringName}
            style={[
              styles.stringButton,
              {
                backgroundColor: COLORS[index],
              },
              pressedString === stringName && styles.stringButtonPressed,
            ]}
            onPress={() => handleStringPress(stringName, index)}
          >
            <Text style={styles.stringLabel}>{stringName.toUpperCase()}</Text>
            <Text style={styles.stringNote}>{["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"][index]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Çalış Rehberi */}
      <View style={styles.guideContainer}>
        <Text style={styles.guideText}>💡 Tellere dokunarak çal</Text>
        <Text style={styles.guideSubtext}>{selectedInstrument.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  baglamaBody: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  bodyBack: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8B4513',
    borderWidth: 3,
    borderColor: '#D2691E',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },
  bodyText: {
    fontSize: 60,
  },
  stringsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  stringButton: {
    width: 50,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  stringButtonPressed: {
    transform: [{ scale: 1.1 }],
    shadowOpacity: 0.6,
  },
  stringLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  stringNote: {
    fontSize: 10,
    color: '#000',
    marginTop: 2,
  },
  guideContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  guideText: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  guideSubtext: {
    fontSize: 12,
    color: '#FFA500',
    marginTop: 5,
  },
});
