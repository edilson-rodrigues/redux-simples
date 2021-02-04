import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyles'
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store()}>
        <React.StrictMode>
            <GlobalStyle/>
            <App/>
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);
