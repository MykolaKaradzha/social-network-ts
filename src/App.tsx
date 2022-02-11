import React from 'react';
import {Dialogs} from "./components/Dialogs/Dialogs";


import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {postsType, usersType} from "./index";




type  propsType = {
    posts:Array<postsType>
    users: Array<usersType>
}

function App(props: propsType) {

    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs users={props.users}/>}/>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
