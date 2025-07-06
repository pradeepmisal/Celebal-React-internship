import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { lastfmApi } from './services/lastfmApi';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [lastfmApi.reducerPath]: lastfmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lastfmApi.middleware),
});
