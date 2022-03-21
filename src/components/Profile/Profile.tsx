import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type propsType = {
    addPost: (newPost: string)=>void
    posts:Array<PostsType>
    removePost: (id: string) => void
    newTextPost: string
    updatePost: (updatedText: string) => void
}

export function Profile(props:propsType ) {
    return <main className={s.main}>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost}
                 removePost={props.removePost} newTextPost={props.newTextPost} updatePost={props.updatePost}/>
    </main>
}