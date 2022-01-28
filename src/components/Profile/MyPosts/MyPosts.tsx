import React from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            <textarea></textarea>
            <button>Add</button>
            <button>Remove</button>
            <div>New post</div>
            <div className={s.posts}>
                <Post message={"What`s up?"}/>
                <Post message={"Yo"}/>
                <Post message={"Hey Ho!"}/>
                <Post message={"My first post!"}/>
            </div>
        </div>
    )
}