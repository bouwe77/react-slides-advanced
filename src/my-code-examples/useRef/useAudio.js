import { useEffect, useRef } from "react";

export const useAudio = url => {
  const audioRef = useRef();
  const isPlayingRef = useRef(false);

  useEffect(() => {
    if (!url) return;

    // When there is an audio ref and it is playing: pause it.
    if (audioRef.current && isPlayingRef.current) audioRef.current.pause();

    // Replace the current audio ref with a new Audio object for the new URL.
    audioRef.current = new Audio(url);

    // If the previous audio was playing, start playing the new audio as well.
    if (isPlayingRef.current) audioRef.current.play();
  }, [url]);

  const play = () => {
    if (!audioRef.current) return;
    isPlayingRef.current = true;
    audioRef.current.play();
  };

  const pause = () => {
    if (!audioRef.current) return;
    isPlayingRef.current = false;
    audioRef.current.pause();
  };

  const stop = () => {
    if (!audioRef.current) return;
    isPlayingRef.current = false;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return [play, pause, stop, isPlayingRef.current];
};
