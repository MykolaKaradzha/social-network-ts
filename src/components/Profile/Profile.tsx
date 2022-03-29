import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type propsType = {
    posts:Array<PostsType>
    dispatch: (action: ActionType) => void


}

export function Profile(props:propsType ) {
    return <main className={s.main}>
        <ProfileInfo/>
        <MyPostsContainer posts={props.posts} dispatch={props.dispatch}/>
    </main>
}