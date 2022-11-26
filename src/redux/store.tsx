import { configureStore, Action  } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './rootReducer';
import { createWrapper, HYDRATE} from 'next-redux-wrapper'

// creating store
const store = configureStore({
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


if (process.env.NODE_ENV === 'development' ) {
    // module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default;
      store.replaceReducer(newRootReducer);
    // });
  }
  
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
  
// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);