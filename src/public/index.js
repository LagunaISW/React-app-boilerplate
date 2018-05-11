import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/reducers';
import rootSaga from './state/sagas';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));
const store = createStore(rootReducer, middleware);

// Keep state of reducers when a hot reload occurs
if (module.hot) {
  module.hot.accept('./state/reducers', () => {
    const nextRootReducer = require('./state/reducers');
    store.replaceReducer(nextRootReducer);
  });
}
sagaMiddleware.run(rootSaga);

const render = Component => {
  return ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
