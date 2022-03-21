import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {store, StoreType} from "./redux/store"


import {BrowserRouter} from "react-router-dom"



let reRenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addPost={store.addPost.bind(store)}
                     removePost={store.removePost.bind(store)} updatePost={store.updatePost.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
reRenderEntireTree(store);
store.subscriber(() => reRenderEntireTree(store));