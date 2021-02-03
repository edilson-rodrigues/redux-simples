import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyles'
import configStore from "./store/configStore";

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    </Provider>,

  document.getElementById('root')
);

