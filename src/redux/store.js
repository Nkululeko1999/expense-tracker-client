import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';



//Create a root reducer
const rootReducer = combineReducers({user: userReducer});

//create pesrist configuration describing key, starage and version for local storage
const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

//use the root reducer and persist config to create a persisted storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

//Need to export persistor

const persistor = persistStore(store);

export default persistor