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
                <Post/>
                <Post/>
            </div>
        </div>
    )
}