import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostsType} from "../../redux/store";

type propsType = {
    posts:Array<PostsType>
    dispatch: (action: DispatchType) => void
    newPostText: string


}

export function Profile(props:propsType ) {
    return <main className={s.main}>
        <ProfileInfo/>
        <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </main>
}