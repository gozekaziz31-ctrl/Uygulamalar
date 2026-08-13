import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface MenuProps {
  selectedInstrument: string;
  onSelectInstrument: (instrument: string) => void;
  onClose: () => void;
}

const INSTRUMENTS = [
  { id: 'baglama', name: 'Bağlama', emoji: '🎸', description: 'Klasik Bağlama' },
  { id: 'saz', name: 'Saz', emoji: '🎵', description: 'Geleneksel Saz' },
  { id: 'ud', name: 'Ud', emoji: '🎺', description: 'Ud Enstrümanı' },
  { id: 'ney', name: 'Ney', emoji: '🎶', description: 'Ney (Ney Flütü)' },
  { id: 'kanun', name: 'Kanun', emoji: '🎹', description: 'Kanun Enstrümanı' },
];

export default function Menu({
  selectedInstrument,
  onSelectInstrument,
  onClose,
}: MenuProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚙️ AYARLAR & MENÜ</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>✕ KAPAT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Enstrüman Seçimi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎸 ENSTRÜMAN SEÇİMİ</Text>
          <Text style={styles.sectionDescription}>
            Farklı saz seslerini denemeye başlayın
          </Text>

          {INSTRUMENTS.map((instrument) => (
            <TouchableOpacity
              key={instrument.id}
              style={[
                styles.instrumentCard,
                selectedInstrument === instrument.id &&
                  styles.instrumentCardActive,
              ]}
              onPress={() => onSelectInstrument(instrument.id)}
            >
              <Text style={styles.instrumentEmoji}>{instrument.emoji}</Text>
              <View style={styles.instrumentInfo}>
                <Text style={styles.instrumentName}>{instrument.name}</Text>
                <Text style={styles.instrumentDesc}>
                  {instrument.description}
                </Text>
              </View>
              {selectedInstrument === instrument.id && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* İpuçları */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 OYUN İPUÇLARI</Text>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>• Tüm telleri çalabilirsiniz</Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>• Ritimler ile uyum sağlayın</Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>• Kendi melodi oluşturun</Text>
          </View>
          <View style={styles.tipCard}>
            <Text style={styles.tipText}>• Farklı enstrümanları deneyin</Text>
          </View>
        </View>

        {/* Kontroller */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎮 KONTROLLER</Text>
          <View style={styles.controlInfo}>
            <Text style={styles.controlText}>Teller - Tellere dokunun</Text>
          </View>
          <View style={styles.controlInfo}>
            <Text style={styles.controlText}>
              Ritim - RİTİMİ BAŞLAT tuşuna basın
            </Text>
          </View>
          <View style={styles.controlInfo}>
            <Text style={styles.controlText}>
              Durdur - DUR tuşu ile ritimseli durdurun
            </Text>
          </View>
        </View>

        {/* Hakkında */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ℹ️ HAKKINDA</Text>
          <Text style={styles.aboutText}>
            Bağlama Çalma Oyunu - Gerçekçi bağlama sesleri ile Türk müzik
            enstrümanlarını keşfedin. Halay, Uzun Hava ve daha birçok ritim ile
            müzik yapın!
          </Text>
          <Text style={styles.versionText}>Versiyon: 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  closeButton: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FF4500',
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D2691E',
  },
  sectionDescription: {
    fontSize: 13,
    color: '#DDD',
    marginBottom: 12,
  },
  instrumentCard: {
    flexDirection: 'row',
    backgroundColor: '#8B4513',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D2691E',
    alignItems: 'center',
  },
  instrumentCardActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFA500',
  },
  instrumentEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  instrumentInfo: {
    flex: 1,
  },
  instrumentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  instrumentCardActive + ' ' + 'instrumentName': {
    color: '#000',
  },
  instrumentDesc: {
    fontSize: 12,
    color: '#DDD',
    marginTop: 3,
  },
  checkmark: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  tipCard: {
    backgroundColor: '#1a3a1a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#6BCB77',
  },
  tipText: {
    fontSize: 13,
    color: '#6BCB77',
  },
  controlInfo: {
    backgroundColor: '#2a2a3a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 8,
  },
  controlText: {
    fontSize: 13,
    color: '#FFD700',
  },
  aboutText: {
    fontSize: 13,
    color: '#DDD',
    lineHeight: 20,
    marginBottom: 10,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});
