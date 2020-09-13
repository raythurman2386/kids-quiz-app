import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [thunk, logger];

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
	createStore(
		persistedReducer,
		composeWithDevTools(applyMiddleware(...middleware))
	);
