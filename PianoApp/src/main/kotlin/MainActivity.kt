package com.example.pianoapp

import android.media.AudioAttributes
import android.media.AudioFormat
import android.media.AudioTrack
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.Button
import android.widget.TextView
import android.widget.ScrollView
import androidx.appcompat.app.AppCompatActivity
import kotlin.math.sin
import kotlin.math.PI

class MainActivity : AppCompatActivity() {
    
    private lateinit var audioTrack: AudioTrack
    private val sampleRate = 44100
    private val duration = 500 // ms
    
    // 3 Oktav - Tüm Notalar (Do1 - Si3)
    private val notes = arrayOf(
        // Oktav 1
        130.81f, 146.83f, 164.81f, 174.61f, 196.00f, 220.00f, 246.94f, 261.63f,
        // Oktav 2
        293.66f, 329.63f, 349.23f, 392.00f, 440.00f, 493.88f, 523.25f, 587.33f,
        // Oktav 3
        659.25f, 739.99f, 783.99f, 880.00f, 987.77f, 1046.50f, 1174.66f, 1318.51f
    )
    
    private val noteNames = arrayOf(
        "Do1", "Re1", "Mi1", "Fa1", "Sol1", "La1", "Si1", "Do2",
        "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2", "Do3", "Re3",
        "Mi3", "Fa3", "Sol3", "La3", "Si3", "Do4", "Re4", "Mi4"
    )
    
    private val colors = intArrayOf(
        0xFFFFCDD2.toInt(), 0xFFF8BBD0.toInt(), 0xFFF48FB1.toInt(), 0xFFF06292.toInt(),
        0xFFEC407A.toInt(), 0xFFE91E63.toInt(), 0xFFC2185B.toInt(), 0xFF880E4F.toInt(),
        0xFFFCE4EC.toInt(), 0xFFF8BBD0.toInt(), 0xFFF48FB1.toInt(), 0xFFF06292.toInt(),
        0xFFE91E63.toInt(), 0xFFC2185B.toInt(), 0xFF880E4F.toInt(), 0xFFFFE082.toInt(),
        0xFFFFD54F.toInt(), 0xFFFFCA28.toInt(), 0xFFFBC02D.toInt(), 0xFFFB8C00.toInt(),
        0xFFF57C00.toInt(), 0xFFE65100.toInt(), 0xFFC2185B.toInt(), 0xFF4CAF50.toInt()
    )
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        initAudioTrack()
        setupUI()
    }
    
    private fun initAudioTrack() {
        val bufferSize = AudioTrack.getMinBufferSize(
            sampleRate,
            AudioFormat.CHANNEL_OUT_MONO,
            AudioFormat.ENCODING_PCM_16BIT
        )
        
        audioTrack = AudioTrack(
            AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_MEDIA)
                .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                .build(),
            AudioFormat.Builder()
                .setSampleRate(sampleRate)
                .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                .setEncoding(AudioFormat.ENCODING_PCM_16BIT)
                .build(),
            bufferSize,
            AudioTrack.MODE_STREAM
        )
    }
    
    private fun setupUI() {
        val scrollView = ScrollView(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.MATCH_PARENT
            )
        }
        
        val mainLayout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
        }
        
        // Başlık
        val titleView = TextView(this).apply {
            text = "🎹 Dijital Piyano - 24 Nota"
            textSize = 28f
            setTextColor(0xFF000000.toInt())
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                setMargins(16, 32, 16, 16)
            }
        }
        mainLayout.addView(titleView)
        
        // Alt başlık
        val subtitleView = TextView(this).apply {
            text = "3 Oktav - Tüm Notalar"
            textSize = 14f
            setTextColor(0xFF666666.toInt())
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                setMargins(16, 0, 16, 16)
            }
        }
        mainLayout.addView(subtitleView)
        
        // Nota tuşları container
        val pianoContainer = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
            isBaselineAligned = false
        }
        
        // İlk 8 nota (Oktav 1)
        for (i in 0..7) {
            val button = createNoteButton(i)
            pianoContainer.addView(button)
        }
        
        mainLayout.addView(pianoContainer)
        
        // İkinci sıra (Oktav 2)
        val piano2Container = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
            isBaselineAligned = false
        }
        
        for (i in 8..15) {
            val button = createNoteButton(i)
            piano2Container.addView(button)
        }
        
        mainLayout.addView(piano2Container)
        
        // Üçüncü sıra (Oktav 3)
        val piano3Container = LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            )
            isBaselineAligned = false
        }
        
        for (i in 16..23) {
            val button = createNoteButton(i)
            piano3Container.addView(button)
        }
        
        mainLayout.addView(piano3Container)
        
        // Durum göstergesi
        val statusView = TextView(this).apply {
            text = "✅ Hazır"
            textSize = 16f
            setTextColor(0xFF4CAF50.toInt())
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                setMargins(16, 24, 16, 16)
            }
        }
        mainLayout.addView(statusView)
        
        // WiFi Bilgisi
        val wifiView = TextView(this).apply {
            text = "📡 WiFi Hotspot: Bağlanmaya Hazır"
            textSize = 14f
            setTextColor(0xFF2196F3.toInt())
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                setMargins(16, 8, 16, 24)
            }
        }
        mainLayout.addView(wifiView)
        
        scrollView.addView(mainLayout)
        setContentView(scrollView)
    }
    
    private fun createNoteButton(index: Int): Button {
        return Button(this).apply {
            text = noteNames[index]
            layoutParams = LinearLayout.LayoutParams(
                0,
                100,
                1f
            ).apply {
                setMargins(3, 8, 3, 8)
            }
            setBackgroundColor(colors[index])
            setTextColor(0xFF000000.toInt())
            textSize = 12f
            
            setOnClickListener {
                playNote(notes[index], noteNames[index])
            }
        }
    }
    
    private fun playNote(frequency: Float, noteName: String) {
        Thread {
            val numSamples = sampleRate * duration / 1000
            val buffer = ShortArray(numSamples)
            
            // Sinüs dalgası oluştur + Envelope (ADSR benzeri)
            for (i in 0 until numSamples) {
                val t = i.toFloat() / sampleRate
                
                // Sinüs dalgası
                var sample = sin(2 * PI * frequency * t)
                
                // Attack: 10ms
                if (i < sampleRate * 0.01) {
                    sample *= (i.toFloat() / (sampleRate * 0.01))
                }
                // Release: Fade out son 100ms
                else if (i > numSamples - sampleRate * 0.1) {
                    val fadeOutSamples = sampleRate * 0.1f
                    sample *= ((numSamples - i) / fadeOutSamples)
                }
                
                buffer[i] = (32767 * 0.25f * sample).toShort()
            }
            
            audioTrack.play()
            audioTrack.write(buffer, 0, buffer.size)
        }.start()
    }
    
    override fun onDestroy() {
        super.onDestroy()
        audioTrack.stop()
        audioTrack.release()
    }
}