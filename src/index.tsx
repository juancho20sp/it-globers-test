import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { generateStore } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={generateStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

