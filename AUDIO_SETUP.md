# Background Music Setup

## Instructions

To add background wedding instrumental music to your website, follow these steps:

### 1. Prepare Your Audio File

- Find or create a soft wedding instrumental song (MP3 format recommended)
- Keep the file size reasonable (2-5 MB recommended)
- File name should be: `wedding-instrumental.mp3`

### 2. Add Audio to Project

- Create a new folder: `public/audio/`
- Place your `wedding-instrumental.mp3` file in this folder
- The file will be automatically served from `/audio/wedding-instrumental.mp3`

### 3. How It Works

- Music will start playing when the user opens the envelope
- Music will loop continuously throughout the website
- First user interaction (click/tap) enables audio playback (browser requirement)
- Users can control volume via their browser's audio controls

### 4. Recommended Music

Popular choices for wedding websites:
- "Canon in D" (Classical instrumental)
- Soft piano variations of popular wedding songs
- Gentle string arrangements
- Background ambient classical music

### 5. Testing

1. Place your audio file in `public/audio/wedding-instrumental.mp3`
2. Reload your website
3. Open the envelope to trigger music playback
4. Music should start playing and loop continuously

### Optional: Adjust Volume

If you want to adjust the default volume, modify `BackgroundMusic.tsx`:
```typescript
audioRef.current.volume = 0.5; // Set to 0-1 (0.5 = 50% volume)
```

## File Structure

```
project/
├── public/
│   └── audio/
│       └── wedding-instrumental.mp3  ← Add your file here
├── src/
│   └── components/
│       └── BackgroundMusic.tsx
└── ...
```
