import React, {ChangeEvent, useState} from "react";
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/store";
import {Button, List, TextField} from "@mui/material";


type propsType = {
    addPost: (newPost: string)=>void
    posts:Array<PostsType>
    removePost: (id:string) => void
    newTextPost: string
    updatePost: (updatedText: string) => void
}

export const MyPosts:React.FC<propsType> = ({addPost, removePost, posts, newTextPost, updatePost}) => {

    const PostsElements = posts.map( post=> <Post key={post.id} {...post} removePost={removePost} />)
    const [error, setError] = useState<string>('')
    const onClickAddPost = () => {
        if (newTextPost.trim()) {
            addPost(newTextPost.trim())
        } else {
            setError("enter something, bro")
        }

    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        updatePost(event.currentTarget.value);
    }
    const onBlurInputHandler = () => {
        setError('')
    }

    return (
        <div>
            <TextField onChange={onChangeInputHandler} value={newTextPost} size={'small'}
                       error={!!error} helperText={error} onBlur={onBlurInputHandler}></TextField>
            <Button onClick={onClickAddPost}
                    variant={'text'}
                    color={'error'}
                    sx={{ml: 5}}
            >Add Post</Button>
            <div>New post</div>
            <List>
                {PostsElements}
            </List>
        </div>
    )
}