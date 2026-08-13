# 🎸 Bağlama Çalma Oyunu

Gerçekçi bağlama sesleri ile Türk müzik enstrümanlarını keşfediş bir mobil oyun uygulaması.

## 🎵 Özellikler

- **Gerçekçi Bağlama Sesleri**: Otantik bağlama tonu ile nota çalma
- **Çeşitli Ritimler**:
  - 💃 Halay (120 BPM)
  - 🎉 Hora (130 BPM)
  - 🎵 Uzun Hava (60 BPM)
  - 👨‍🎤 Zeybek (90 BPM)
  - 🔥 Horon (140 BPM)
  - ⚡ Miş (110 BPM)

- **Farklı Enstrümanlar**:
  - 🎸 Bağlama
  - 🎵 Saz
  - 🎺 Ud
  - 🎶 Ney
  - 🎹 Kanun

- **İnteraktif Menü**: Enstrüman seçimi ve ayarlar
- **Başlangıç Intro**: Otomatik bağlama introdu
- **Mobil Oyun Arayüzü**: Touch kontrolleri ile kolay oynanabilirlik

## 🚀 Kurulum

```bash
cd baglama-game
npm install
```

## ▶️ Çalıştırma

### Expo ile (Önerilir)
```bash
npm start
```

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 🎮 Nasıl Oynanır?

1. **Oyuna Başla**: Intro ekranında "OYUNA BAŞLA" butonuna basın
2. **Telleri Çal**: Renkli tel butonlarına dokunarak nota çalın
3. **Ritim Seç**: Ritim seçiciden istediğiniz ritimu seçin
4. **Ritimseli Çal**: "RİTİMİ BAŞLAT" ile ritim ve birlikte çalın
5. **Menüyü Aç**: "MENU" butonuna basarak enstrüman değiştirin

## 📱 Ekranlar

### Intro Ekranı
- Hoş geldiniz mesajı
- Otomatik bağlama introdu
- Oyuna başlama butonu

### Oyun Ekranı
- Bağlama gösterimi (7 tel)
- Ritim seçici (kaydırılabilir)
- Ritim kontrol butonları
- Menü butonu

### Menü Ekranı
- Enstrüman seçimi
- Oyun ipuçları
- Kontrol açıklamaları
- Uygulama hakkında bilgisi

## 🛠️ Teknoloji Stack

- **React Native**: Mobil uygulama geliştirmesi
- **Expo**: Hızlı geliştirme ve dağıtım
- **Expo AV**: Ses yönetimi
- **TypeScript**: Tür güvenliği

## 📝 Dosya Yapısı

```
baglama-game/
├── src/
│   ├── App.tsx                 # Ana uygulama
│   ├── screens/
│   │   ├── IntroScreen.tsx     # Başlangıç ekranı
│   │   └── GameScreen.tsx      # Oyun ekranı
│   ├── components/
│   │   ├── Baglama.tsx         # Bağlama enstrümanı
│   │   ├── Menu.tsx            # Menü ekranı
│   │   └── RhythmSelector.tsx  # Ritim seçici
│   └── utils/
│       └── soundManager.ts     # Ses yönetimi
├── assets/                     # Resimler ve ses dosyaları
├── package.json
├── app.json
└── README.md
```

## 🎵 Müzik Notaları

Uygulama şu notaları destekler:
- **Do** (261.63 Hz)
- **Re** (293.66 Hz)
- **Mi** (329.63 Hz)
- **Fa** (349.23 Hz)
- **Sol** (392.0 Hz)
- **La** (440.0 Hz)
- **Si** (493.88 Hz)

## 📊 Ritim Tempoları

| Ritim | Tempo | Karakteri |
|-------|-------|----------|
| Halay | 120 BPM | Neşeli, hızlı |
| Hora | 130 BPM | Çok hızlı, coşkulu |
| Uzun Hava | 60 BPM | Yavaş, duygusal |
| Zeybek | 90 BPM | Orta hızlı, dramatik |
| Horon | 140 BPM | Çok hızlı, enerjik |
| Miş | 110 BPM | Hızlı, canlı |

## 🚀 Gelecek Özellikler

- [ ] Gerçek ses örnekleri (sample)
- [ ] Şarkı kaydı ve oynatma
- [ ] Çoklu katlı (multi-layer) çalışma
- [ ] Başarı rozetleri ve puan sistemi
- [ ] Online multiplayer
- [ ] MIDI desteği
- [ ] Öğretici modlar

## 🤝 Katkı

Katkılar memnuniyetle kabul edilir! Lütfen bir issue açın veya pull request gönderin.

## 📄 Lisans

MIT Lisansı - Detaylar için LICENSE dosyasına bakın.

## 👨‍💻 Geliştirici

**Bağlama Çalma Oyunu** - Türk Müzik Enstrümanlarını Keşfetme Projesi

---

**Keyifli Çalmalar! 🎸🎵**
