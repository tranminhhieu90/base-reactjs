import { createStore } from 'redux';
import rootReducer from './app.reducer';

export const configureStore = createStore(rootReducer);



