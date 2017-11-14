import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers/index';
import App from './app';


const initialState = window.__INITIAL_STATE__; 

const store = createStore(reducers, initialState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default;
    render(nextApp);
  });
}
