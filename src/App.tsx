import React from 'react';
import {Dialogs} from "./components/Dialogs/Dialogs";


import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";

import {StateType} from "./redux/state";




type  PropsType = {
    state: StateType
    addPost: (newPost: string)=>void
    removePost: (id: string) => void
}

function App(props: PropsType) {

    return (

            <div className={s.app_wrapper}>
                <Header/>
                <Navbar friends={props.state.SideBar.friends}/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs users={props.state.DialogsPage.users}
                                                                 messages={props.state.DialogsPage.messages}
                        />}/>
                        <Route path="/profile" element={<Profile posts={props.state.ProfilePage.posts}
                                                                 addPost={props.addPost}
                                                                 removePost={props.removePost}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
