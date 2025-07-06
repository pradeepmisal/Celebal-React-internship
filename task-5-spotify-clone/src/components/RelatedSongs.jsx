import React from 'react';

import TrackRow from './SongBar';

const RelatedTracks = ({ tracks, artistId, isPlaying, currentTrack, handlePause, handlePlay }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-indigo-100">Related Tracks:</h1>

    <div className="mt-6 w-full flex flex-col">
      {tracks?.map((track, idx) => (
        <TrackRow
          key={`${artistId}-${track.key}-${idx}`}
          track={track}
          idx={idx}
          artistId={artistId}
          isPlaying={isPlaying}
          currentTrack={currentTrack}
          handlePause={handlePause}
          handlePlay={handlePlay}
        />
      ))}
    </div>
  </div>
);

export default RelatedTracks;
