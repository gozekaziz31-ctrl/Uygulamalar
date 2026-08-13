# ProGuard kuralları - APK boyutunu küçültmek için
-keep class com.example.pianoapp.** { *; }
-keepclassmembers class com.example.pianoapp.** { *; }

# Android kütüphaneleri
-keep public class * extends android.app.Activity
-keep public class * extends android.app.Service
-keepclasseswithmembernames class * {
    native <methods>;
}

# Optimizasyon
-dontshrink
-optimizationpasses 5
-repackageclasses
-allowaccessmodification