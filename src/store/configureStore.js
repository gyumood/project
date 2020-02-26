import { createStore, applyMiddleware } from 'redux';
import penderMiddleware from 'redux-pender';
import modules from 'store/modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialStore) => {
	const store = createStore(
		modules, initialStore, composeWithDevTools(applyMiddleware(penderMiddleware())),
	);

	// config hot-loader

	return store;
};

export default configureStore;
