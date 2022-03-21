import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {state, StateType, subscriber} from "./redux/state"


import {BrowserRouter} from "react-router-dom";
import {addPost, removePost, updatePost} from "./redux/state";



let reRenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} removePost={removePost} updatePost={updatePost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
reRenderEntireTree(state);
subscriber(() => reRenderEntireTree(state));