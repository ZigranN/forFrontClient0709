import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";

import reducer from "./store/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

