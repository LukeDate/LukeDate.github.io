import React from 'react';
import ReactDOM from 'react-dom';
//the main app
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

ReactDOM.render(<App />, document.getElementById('app'));
