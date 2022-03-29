import React, {ChangeEvent, useState} from "react";
import {Post} from './Post/Post';
import {Button, List, TextField} from "@mui/material";
import {AddPostAC} from "../../../redux/profile-reducer";
import {ActionType, PostsType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


type propsType = {
    posts:Array<PostsType>
    dispatch: (action: ActionType) => void


}

export const MyPostsContainer:React.FC<propsType> = ({ posts, dispatch,}) => {

    const PostsElements = posts.map( post=> <Post key={post.id} {...post} dispatch={(dispatch)} />)
    const [error, setError] = useState<string>('')
    const [postText, setPostText] = useState<string>('')
    const onClickAddPost = () => {
        if (postText.trim()) {
            dispatch(AddPostAC(postText.trim()));
            setPostText('')
        } else {
            setError("enter something, bro")
        }
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setPostText(event.currentTarget.value);
    }
    const onBlurInputHandler = () => {
        setError('')
    }

    return (<MyPosts PostsElements={PostsElements} error={error}
                     onClickAddPost={onClickAddPost} onBlurInputHandler={onBlurInputHandler}
                     onChangeInputHandler={onChangeInputHandler} postText={postText}/>)
}