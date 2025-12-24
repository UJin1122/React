import { useEffect, useRef } from 'react';
import { use } from 'react';
import ThemeContext from '@/contexts/ThemeContext';

const audioSource = '/We Wish You.mp3';

function ChristmasMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const themeContext = use(ThemeContext);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (themeContext.theme === 'dark') {
      // 다크모드일 때 재생
      audio.volume = 0.3; // 볼륨 조절 (0.0 ~ 1.0)
      audio.loop = true; // 반복 재생
      audio.src = audioSource;
      audio.play();      
    } else {
      // 라이트모드일 때 정지
      audio.pause();
      audio.currentTime = 0;
    }
  }, [themeContext.theme]);

  return (
    <audio
      ref={audioRef}
      preload="auto"
    />
  );
}

export default ChristmasMusic;

