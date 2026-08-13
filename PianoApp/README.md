# 🎹 Dijital Piyano Uygulaması

Hafif ve gerçekçi sesli Android piyano uygulaması.

## ✨ Özellikler

✅ **24 Nota (3 Oktav)**: Do1 - Mi4 (Tam Piyano Aralığı)  
✅ **Tüm Notalar**: Her nota ayrı renkle gösterilir  
✅ **Gerçekçi Ses**: Sinüs dalgası + ADSR envelope  
✅ **Hafif APK**: ~2.5 MB  
✅ **WiFi Hotspot Desteği**: Herhangi bir ağa bağlanabilir  
✅ **Smooth Scroll**: Tüm notalar görünür hale geldi  

## 🎵 Notalar

**Oktav 1**: Do1, Re1, Mi1, Fa1, Sol1, La1, Si1, Do2  
**Oktav 2**: Re2, Mi2, Fa2, Sol2, La2, Si2, Do3, Re3  
**Oktav 3**: Mi3, Fa3, Sol3, La3, Si3, Do4, Re4, Mi4  

## 🔧 Teknik Detaylar

- **Min SDK**: 21 (Android 5.0 Lollipop)
- **Target SDK**: 34 (Android 14)
- **Dil**: Kotlin
- **Ses Engine**: Android AudioTrack API
- **Sample Rate**: 44.1 kHz (CD Quality)
- **Bit Depth**: 16-bit PCM

## 📦 Kurulum

### Android Studio ile:

```bash
# 1. Android Studio'da aç
# 2. Build menüsünde "Generate Signed Bundle / APK" seç
# 3. APK seçeneğini işaretle
# 4. Release build seç
# 5. APK oluşturulacak
```

### Komut satırı ile:

```bash
./gradlew assembleRelease
# APK: app/release/app-release.apk
```

## 📱 Kullanım

1. Uygulamayı aç
2. İstediğin nota tuşuna tıkla
3. Müzik otomatik olarak çalınacak
4. WiFi Hotspot ile başka cihazlardan erişebilirsin

## 🎼 Ses Kalitesi

- **Frequency Range**: 130.81 Hz - 1318.51 Hz
- **Duration**: 500ms
- **Envelope**: Attack + Release
- **Volume**: -12dB (Distortion önlemek için)

## 🚀 Performans

- Çok hafif (threading kullanıyor)
- Minimum RAM kullanımı
- Hızlı başlama süresi
- Sorunsuz nota çalma

## 📡 WiFi Hotspot Bağlantısı

Android cihazınızda Hotspot açtıktan sonra:

1. Settings > Wireless > Mobile Hotspot aç
2. Başka cihazdan WiFi'ye bağlan
3. Piyano uygulamasını her cihazda çalıştır
4. Senkron olarak müzik çalabilirsin

## 📊 APK Boyut Optimizasyonu

- ProGuard Code Obfuscation: ✅
- Asset Compression: ✅
- Resource Shrinking: ✅
- Minimal Dependencies: ✅

## 🎨 Renkler

Her nota unique renkle gösterilir - görsel fark oluştu:
- Oktav 1: Kırmızı tonları
- Oktav 2: Sarı/Turuncu tonları
- Oktav 3: Yeşil/Mavi tonları

---

**Enjoy! 🎵**

Yapımcı: Piano App Team