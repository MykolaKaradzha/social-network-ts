import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StateType, StoreType} from "../../redux/redux-store";



type propsType = {
    store: StoreType
    state: StateType
}

export const Profile:React.FC<propsType> = ({store, state}) => {
    return <main className={s.main}>
        <ProfileInfo/>
        <MyPostsContainer store={store} state={state}/>
    </main>
}