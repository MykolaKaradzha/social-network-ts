import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, removePost, state} from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import {reRenderEntireTree} from "./render";


reRenderEntireTree(state)
