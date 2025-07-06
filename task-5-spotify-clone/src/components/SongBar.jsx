/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const ListTrackRow = ({ songData, order, performerId, isPlaying, nowPlaying, onPause, onPlay }) => (
  <div className={`w-full flex flex-row items-center hover:bg-rose-900/60 ${nowPlaying?.title === songData?.title ? 'bg-blue-900/80' : 'bg-transparent'} py-2 p-4 rounded-xl cursor-pointer mb-2 transition-colors`}>
    <h3 className="font-bold text-base text-rose-200 mr-3">{order + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-xl shadow"
        src={performerId ? songData?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : songData?.images?.coverart}
        alt={songData?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!performerId ? (
          <Link to={`/songs/${songData.key}`}>
            <p className="text-xl font-bold text-blue-100">
              {songData?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-blue-100">
            {songData?.attributes?.name}
          </p>
        )}
        <p className="text-base text-rose-200 mt-1">
          {performerId ? songData?.attributes?.albumName : songData?.subtitle}
        </p>
      </div>
    </div>
    {!performerId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={nowPlaying}
          song={songData}
          handlePause={onPause}
          handlePlay={() => onPlay(songData, order)}
        />
      )
      : null}
  </div>
);

export default ListTrackRow;
