import React, {ChangeEvent, useState} from "react";
import s from '../Profile.module.css';
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/state";
import {Button, TextField} from "@mui/material";


type propsType = {
    addPost: (newPost: string)=>void
    posts:Array<PostsType>
    removePost: (id:string) => void
}

export const MyPosts:React.FC<propsType> = ({addPost, removePost, posts}) => {

    const PostsElements = posts.map( post=> <Post key={post.id} {...post} removePost={removePost} />)
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const onClickAddPost = () => {
        if (inputValue.trim()) {
            addPost(inputValue.trim())
            setInputValue('')
        } else {
            setError("enter something, bro")
        }

    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }
    const onBlurInputHandler = () => {
        setError('')
    }

    return (
        <div>
            <TextField onChange={onChangeInputHandler} value={inputValue}
                       error={!!error} helperText={error} onBlur={onBlurInputHandler}></TextField>
            <Button onClick={onClickAddPost} variant={'contained'} size={'small'} color={'error'}>Add Post</Button>
            <div>New post</div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    )
}