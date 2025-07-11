import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, TrackTile } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTracksByTagQuery } from '../redux/services/lastfmApi';
import { genres } from '../assets/constants';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksByTagQuery(genreListId?.toLowerCase() || 'pop');
  console.log('Last.fm API data:', data);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error message={error?.data?.message || error?.error || 'Something went wrong. Please try again'} />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (!data || !data.tracks || !data.tracks.track || data.tracks.track.length === 0) {
    return <Error message="No songs found for this genre." />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'POP'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.track?.map((song, i) => (
          <TrackTile
            key={song.mbid || song.url}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data.tracks.track}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
