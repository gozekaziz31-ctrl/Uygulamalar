import { Audio } from 'expo-av';

const NOTES = {
  do: 261.63,
  re: 293.66,
  mi: 329.63,
  fa: 349.23,
  sol: 392.0,
  la: 440.0,
  si: 493.88,
};

const INSTRUMENT_SOUNDS = {
  baglama: {
    attack: 0.05,
    decay: 0.15,
    sustain: 0.3,
    release: 0.2,
  },
  saz: {
    attack: 0.08,
    decay: 0.2,
    sustain: 0.4,
    release: 0.25,
  },
  ud: {
    attack: 0.06,
    decay: 0.18,
    sustain: 0.35,
    release: 0.22,
  },
  ney: {
    attack: 0.12,
    decay: 0.25,
    sustain: 0.45,
    release: 0.3,
  },
  kanun: {
    attack: 0.03,
    decay: 0.12,
    sustain: 0.25,
    release: 0.15,
  },
};

const RHYTHM_DATA = {
  halay: {
    name: 'Halay',
    tempo: 120,
    pattern: [100, 100, 200, 100, 100],
    notes: ['do', 're', 'do', 'sol', 're'],
  },
  hora: {
    name: 'Hora',
    tempo: 130,
    pattern: [80, 80, 160, 80, 80],
    notes: ['sol', 'do', 're', 'mi', 'do'],
  },
  'uzun-hava': {
    name: 'Uzun Hava',
    tempo: 60,
    pattern: [400, 200, 300, 200],
    notes: ['la', 'sol', 'mi', 'do'],
  },
  zeybek: {
    name: 'Zeybek',
    tempo: 90,
    pattern: [150, 100, 150, 100, 100],
    notes: ['mi', 're', 'do', 'si', 'la'],
  },
  horon: {
    name: 'Horon',
    tempo: 140,
    pattern: [70, 70, 140, 70, 70],
    notes: ['do', 'mi', 're', 'do', 'sol'],
  },
  mis: {
    name: 'Miş',
    tempo: 110,
    pattern: [120, 120, 180, 120, 100],
    notes: ['sol', 'do', 'mi', 'do', 're'],
  },
};

// Osilator kullanarak ses oluştur
async function generateTone(
  frequency: number,
  duration: number,
  instrument: string = 'baglama'
): Promise<Audio.Sound> {
  const sound = new Audio.Sound();

  try {
    // Web Audio API veya native ses oluşturma
    // Not: Expo'da ses sentezi için dış kütüphane kullanılabilir
    // Burada sadece placeholder olarak gerçek implementasyon gerekir
    console.log(`Playing ${instrument} - ${frequency}Hz for ${duration}ms`);

    // Placeholder - gerçek implementasyonda Web Audio API kullanılacak
    await new Promise((resolve) => setTimeout(resolve, duration));
    return sound;
  } catch (error) {
    console.log('Error generating tone:', error);
    return sound;
  }
}

export async function playBaglama(note: string, instrument: string = 'baglama'): Promise<void> {
  try {
    // Intro veya nota çalma
    if (note === 'intro') {
      // Intro melodisi
      const introNotes = ['la', 'sol', 'mi', 're', 'do'];
      for (const n of introNotes) {
        const freq = NOTES[n as keyof typeof NOTES];
        if (freq) {
          await generateTone(freq, 500, instrument);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    } else {
      const frequency = NOTES[note as keyof typeof NOTES];
      if (frequency) {
        await generateTone(frequency, 300, instrument);
      }
    }
  } catch (error) {
    console.log('Error playing baglama:', error);
  }
}

export async function playRhythm(
  rhythmId: string,
  soundRef: React.MutableRefObject<Audio.Sound | null>
): Promise<void> {
  try {
    const rhythm = RHYTHM_DATA[rhythmId as keyof typeof RHYTHM_DATA];
    if (!rhythm) {
      console.log('Rhythm not found:', rhythmId);
      return;
    }

    // Ritmi çal
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < rhythm.pattern.length; j++) {
        const note = rhythm.notes[j % rhythm.notes.length];
        const freq = NOTES[note as keyof typeof NOTES];
        const duration = rhythm.pattern[j];

        if (freq) {
          await generateTone(freq, duration, 'baglama');
        }
      }
    }
  } catch (error) {
    console.log('Error playing rhythm:', error);
  }
}

export async function stopRhythm(
  soundRef: React.MutableRefObject<Audio.Sound | null>
): Promise<void> {
  try {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
    }
  } catch (error) {
    console.log('Error stopping rhythm:', error);
  }
}
