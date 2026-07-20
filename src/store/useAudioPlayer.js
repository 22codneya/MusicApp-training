import { useRef } from "react";

function useAudioPlayer() {
  const currentAudioRef = useRef(null);

  const playSong = (preview) => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }

    const audio = new Audio(preview);
    audio.play();
    currentAudioRef.current = audio;
  };

  const pauseSong = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
    }
  };

  return { playSong, pauseSong };
}

export default useAudioPlayer;