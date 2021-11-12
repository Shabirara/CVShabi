import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalReducer from './globalReducer';

const allReducers = combineReducers({
    GlobalReducer
})

const persistConfig = {
    key: 'cvshabi',
    storage: AsyncStorage,
    timeout: null,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const Store = createStore(
    persistedReducer,
    {},
);

export const Persistor = persistStore(Store);