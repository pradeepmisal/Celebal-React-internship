/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopTracksQuery, useGetTopArtistsQuery } from '../redux/services/lastfmApi';

import 'swiper/css';
import 'swiper/css/free-mode';

const HighlightTrackCard = ({ track, idx, isPlaying, currentTrack, onPause, onPlay }) => (
  <div className={`w-full flex flex-row items-center hover:bg-rose-900/60 ${currentTrack?.name === track?.name ? 'bg-blue-900/70' : 'bg-transparent'} py-2 p-4 rounded-xl cursor-pointer mb-2 transition-colors`}>
    <h3 className="font-bold text-base text-rose-200 mr-3">{idx + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-xl shadow" src={track?.image?.[2]?.['#text']} alt={track?.name} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xl font-bold text-blue-100">{track?.name}</p>
        <p className="text-base text-rose-200 mt-1">{typeof track?.artist === 'object' ? track.artist.name : track.artist}</p>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={currentTrack}
      song={track}
      handlePause={onPause}
      handlePlay={() => onPlay(track, idx)}
    />
  </div>
);

const HighlightsPanel = () => {
  const dispatch = useDispatch();
  const { activeSong: currentTrack, isPlaying } = useSelector((state) => state.player);
  const { data: tracksData } = useGetTopTracksQuery();
  const { data: artistsData } = useGetTopArtistsQuery();
  const panelRef = useRef(null);

  useEffect(() => {
    panelRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const topTracks = tracksData?.tracks?.track?.slice(0, 5) || [];
  const topArtists = artistsData?.artists?.artist?.slice(0, 5) || [];

  const onPause = () => {
    dispatch(playPause(false));
  };

  const onPlay = (track, idx) => {
    dispatch(setActiveSong({ song: track, data: topTracks, i: idx }));
    dispatch(playPause(true));
  };

  return (
    <div ref={panelRef} className="flex flex-col xl:flex-row xl:space-x-6 space-y-8 xl:space-y-0">
      <div className="flex-1 bg-gradient-to-br from-rose-900/80 to-blue-900/80 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-100 mb-4">Top Tracks</h2>
        {topTracks.map((track, idx) => (
          <HighlightTrackCard
            key={track?.name + idx}
            track={track}
            idx={idx}
            isPlaying={isPlaying}
            currentTrack={currentTrack}
            onPause={onPause}
            onPlay={onPlay}
          />
        ))}
      </div>
      <div className="flex-1 bg-gradient-to-br from-blue-900/80 to-rose-900/80 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-rose-200 mb-4">Top Artists</h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topArtists.map((artist, idx) => (
            <SwiperSlide
              key={artist?.name + idx}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-fadein"
            >
              <Link to={`/artists/${artist?.mbid || artist?.name}`}>
                <img
                  src={artist?.image?.[2]?.['#text']}
                  alt={artist?.name}
                  className="rounded-full w-24 h-24 object-cover border-4 border-rose-700 shadow"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HighlightsPanel;
