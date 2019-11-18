import React from "react";
import styles from "./Audio.module.css";

function TrackList({ tracks, currentTrackIndex, selectTrackIndex }) {
  function Track({ index, title, selected }) {
    const className = selected ? `${styles.track} ${styles.selected}` : `${styles.track}`;

    return (
      <div onClick={() => selectTrackIndex(index)} className={className}>
        [{index + 1}] {title}
      </div>
    );
  }

  return (
    <>
      {tracks.map((track, index) => (
        <div>
          <Track
            key={index}
            index={index}
            title={track.title}
            selected={index === currentTrackIndex}
          />
        </div>
      ))}
    </>
  );
}

export default TrackList;
