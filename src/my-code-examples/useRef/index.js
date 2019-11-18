import React, { useState, useEffect } from "react";
import { useAudio } from "./useAudio";
import { songs } from "./songs";
import Button from "./Button";
import TrackList from "./TrackList";
import {
  faPlay,
  faPause,
  faStop,
  faForward,
  faBackward
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [songIndex, setSongIndex] = useState(0);
  const [play, pause, stop, isPlaying] = useAudio(songs[songIndex].url);

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [playEnabled, setPlayEnabled] = useState(false);
  const [pauseEnabled, setPauseEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [stopEnabled, setStopEnabled] = useState(false);

  useEffect(() => {
    setPrevEnabled(songIndex > 0);
    setPlayEnabled(songs.length > 0);
    setPauseEnabled(isPlaying);
    setNextEnabled(songIndex < songs.length - 1);
    setStopEnabled(isPlaying);
  }, [songIndex, isPlaying]);

  const prev = () => {
    const newIndex = songIndex === 0 ? 0 : songIndex - 1;
    selectTrackIndex(newIndex);
  };

  const next = () => {
    const newIndex = songIndex === songs.length - 1 ? songs.length - 1 : songIndex + 1;
    selectTrackIndex(newIndex);
  };

  const selectTrackIndex = index => {
    setSongIndex(index);
  };

  return (
    <>
      <TrackList
        tracks={songs}
        currentTrackIndex={songIndex}
        selectTrackIndex={selectTrackIndex}
      />
      <div>
        <Button handleClick={prev} icon={faBackward} enabled={prevEnabled} />
        <Button handleClick={play} icon={faPlay} enabled={playEnabled} />
        <Button handleClick={pause} icon={faPause} enabled={pauseEnabled} />
        <Button handleClick={next} icon={faForward} enabled={nextEnabled} />
        <Button handleClick={stop} icon={faStop} enabled={stopEnabled} />
      </div>
    </>
  );
};
