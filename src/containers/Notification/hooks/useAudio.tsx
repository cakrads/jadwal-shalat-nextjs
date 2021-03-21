import { useEffect, useState } from 'react';

function useAudio(url) {

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing)
      audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  const startAudio = ()=> {
    audio.oncanplaythrough = () => {
      const playedPromise = audio.play();
      if (playedPromise) {
        playedPromise.catch((e) => {
          if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
            return { audioStart: false };
          } else {
            return { audioStart: false };
          }
        }).then(() => {
          return { audioStart: true };
        });
      } else {
        return { audioStart: false };
      }
    };
    return { audioStart: false };
  };

  return {playing, startAudio};
}

export default useAudio;
