import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {store, StoreType} from "./redux/store"


import {BrowserRouter} from "react-router-dom"



let reRenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
reRenderEntireTree();
store.subscriber(() => reRenderEntireTree());