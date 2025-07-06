import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Last.fm API base URL and your API key
const API_KEY = '';
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

export const lastfmApi = createApi({
  reducerPath: 'lastfmApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({
      query: () => `?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
    }),
    getTopArtists: builder.query({
      query: () => `?method=chart.gettopartists&api_key=${API_KEY}&format=json`,
    }),
    getTracksByTag: builder.query({
      query: (tag) => `?method=tag.gettoptracks&tag=${tag}&api_key=${API_KEY}&format=json`,
    }),
    getTrackSearch: builder.query({
      query: (track) => `?method=track.search&track=${track}&api_key=${API_KEY}&format=json`,
    }),
    getArtistInfo: builder.query({
      query: (artist) => `?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`,
    }),
    getTrackInfo: builder.query({
      query: ({ artist, track }) => `?method=track.getInfo&api_key=${API_KEY}&artist=${artist}&track=${track}&format=json`,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetTopArtistsQuery,
  useGetTracksByTagQuery,
  useGetTrackSearchQuery,
  useGetArtistInfoQuery,
  useGetTrackInfoQuery,
} = lastfmApi;
