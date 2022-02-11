import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../index";

export function Profile(props: {posts:Array<postsType>}) {
    return <main className={s.main}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </main>
}