import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise-middleware';

import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(promise),
});

export type AppDispatch = typeof store.dispatch;

export default store;
