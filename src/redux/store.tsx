import { configureStore, Action  } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer from './rootReducer';
import { createWrapper, HYDRATE} from 'next-redux-wrapper'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// creating store

let store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        logger:true,
        immutableCheck: {
          ignoredPaths: ['effects', 'room.raisedHands'],
        },
      }),
  });
const makeStore = ({isServer}: {isServer: boolean}) => {
  if(isServer) {
    return store = configureStore({
      reducer: rootReducer,
    })
  } else {
    const persistConfig = {
      key: "chess-web3",
      storage
    }
// @ts-ignore:next-line
    const persistedReducer = persistReducer(persistConfig,rootReducer);

    store = configureStore({
      reducer: persistedReducer,
    })
    // @ts-ignore:next-line
    store.__persistor = persistStore(store);
    return store;
  }
}

// @ts-ignore:next-line
export const wrapper = createWrapper(makeStore, {debug: true});
export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
  
