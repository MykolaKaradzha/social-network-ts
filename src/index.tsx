import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

export type usersType = {
    id: string
    name: string
    message: string
}
export type postsType = {
    id?: string
    message: string;
    likes: number;
}

const users:Array<usersType> = [
    {id: v1(), name: "Mykola", message: "Wazzup"},
    {id: v1(), name: "Nastya", message: "Hola"},
    {id: v1(), name: "Serhio", message: "Comment ça va?"},
    {id: v1(), name: "Denchik", message: "Yo"},
    {id: v1(), name: "Alexandro", message: "Hallo"},
]
const posts: Array<postsType> = [
    {id: v1(), message: "Pantera", likes: 12},
    {id: v1(), message: "Metallica", likes: 13},
    {id: v1(), message: "Rammstein", likes: 15},
    {id: v1(), message: "Jack White", likes: 16},
]
ReactDOM.render(
  <React.StrictMode>
    <App users={users} posts={posts}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
