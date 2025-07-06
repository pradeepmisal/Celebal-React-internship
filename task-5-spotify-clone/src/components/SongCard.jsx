import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const TrackTile = ({ track, isPlaying, currentTrack, trackList, idx }) => {
  const dispatch = useDispatch();

  if (!track) return null; // Prevent crash if track is undefined

  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handlePlay = () => {
    dispatch(setActiveSong({ song: track, data: trackList, i: idx }));
    dispatch(playPause(true));
  };

  // Last.fm: use track.image[2]['#text'] for medium image, track.name for title, track.artist.name for artist name
  const imageUrl = track.images?.coverart || track.image?.[2]?.['#text'] || '';
  const title = track.title || track.name;
  const artist = track.subtitle || (typeof track.artist === 'object' ? track.artist.name : track.artist);

  return (
    <div className="flex flex-col w-[260px] p-5 bg-gradient-to-br from-[#232946] to-[#191624] shadow-md animate-fadein rounded-xl cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black/60 group-hover:flex ${currentTrack?.title === title ? 'flex bg-indigo-900/80' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={currentTrack}
            song={track}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        </div>
        <img alt="track_img" src={imageUrl} className="w-full h-full rounded-xl" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-bold text-lg text-indigo-100 truncate">
          {title}
        </p>
        <p className="text-sm truncate text-indigo-300 mt-1">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default TrackTile;
