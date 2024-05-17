import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import DebitCardReducer from './slices/DebitCardSlice'
import ScreenshotReducer from './slices/ScreenShotSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['reducer1', 'reducer2'],
    // whitelist: ['reducer3'],
}

const rootReducer = combineReducers({
    debitCard: DebitCardReducer,
    screenShot: ScreenshotReducer, 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer}