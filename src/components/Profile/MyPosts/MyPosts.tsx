import React from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {postsType} from "../../../index";

export function MyPosts(props: {posts:Array<postsType>}) {

    const PostsMapped = props.posts.map( post=> <Post key={post.id} message={post.message} likes={post.likes} />)
    return (
        <div>
            <textarea></textarea>
            <button>Add</button>
            <button>Remove</button>
            <div>New post</div>
            <div className={s.posts}>
                {PostsMapped}
            </div>
        </div>
    )
}