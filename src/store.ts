import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger];

export const configureStore = () =>
	createStore(
		persistedReducer,
		// @ts-ignore
		composeWithDevTools(applyMiddleware(...middleware))
	);
