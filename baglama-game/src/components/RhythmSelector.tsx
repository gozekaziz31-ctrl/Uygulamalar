import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface RhythmSelectorProps {
  selectedRhythm: string;
  onSelectRhythm: (rhythm: string) => void;
}

const RHYTHMS = [
  { id: 'halay', name: 'Halay', emoji: '💃', tempo: '120 BPM' },
  { id: 'hora', name: 'Hora', emoji: '🎉', tempo: '130 BPM' },
  { id: 'uzun-hava', name: 'Uzun Hava', emoji: '🎵', tempo: '60 BPM' },
  { id: 'zeybek', name: 'Zeybek', emoji: '👨‍🎤', tempo: '90 BPM' },
  { id: 'horon', name: 'Horon', emoji: '🔥', tempo: '140 BPM' },
  { id: 'mis', name: 'Miş', emoji: '⚡', tempo: '110 BPM' },
];

export default function RhythmSelector({
  selectedRhythm,
  onSelectRhythm,
}: RhythmSelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>RİTİMLER</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {RHYTHMS.map((rhythm) => (
          <TouchableOpacity
            key={rhythm.id}
            style={[
              styles.rhythmCard,
              selectedRhythm === rhythm.id && styles.rhythmCardActive,
            ]}
            onPress={() => onSelectRhythm(rhythm.id)}
          >
            <Text style={styles.rhythmEmoji}>{rhythm.emoji}</Text>
            <Text style={styles.rhythmName}>{rhythm.name}</Text>
            <Text style={styles.rhythmTempo}>{rhythm.tempo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    marginLeft: 5,
  },
  scrollView: {
    marginHorizontal: -15,
    paddingHorizontal: 15,
  },
  rhythmCard: {
    backgroundColor: '#8B4513',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#D2691E',
    alignItems: 'center',
    minWidth: 80,
  },
  rhythmCardActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFA500',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
  },
  rhythmEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  rhythmName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  rhythmCardActive + ' ' + 'rhythmName': {
    color: '#000',
  },
  rhythmTempo: {
    fontSize: 10,
    color: '#DDD',
    marginTop: 2,
  },
});
