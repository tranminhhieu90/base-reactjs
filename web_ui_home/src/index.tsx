import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from 'app/router';
import Loading from 'components/loading/Loading';
import reportWebVitals from './reportWebVitals';
import 'styles/index.less';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Suspense fallback={<Loading />}>
        <AppRouter />
      </Suspense>
    </PersistGate>
  </Provider >,
  document.getElementById('root')
);

reportWebVitals();
