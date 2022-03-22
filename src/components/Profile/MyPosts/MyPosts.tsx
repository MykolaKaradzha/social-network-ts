import React, {ChangeEvent, useState} from "react";
import {Post} from './Post/Post';
import {DispatchType, PostsType} from "../../../redux/store";
import {Button, List, TextField} from "@mui/material";


type propsType = {
    posts:Array<PostsType>
    dispatch: (action: DispatchType) => void
    newPostText: string

}

export const MyPosts:React.FC<propsType> = ({ posts, dispatch, newPostText}) => {

    const PostsElements = posts.map( post=> <Post key={post.id} {...post} dispatch={(dispatch)} />)
    const [error, setError] = useState<string>('')
    const onClickAddPost = () => {
        if (newPostText.trim()) {
            dispatch({title: 'ADD-POST',});
        } else {
            setError("enter something, bro")
        }
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
            dispatch({title: 'UPDATE-POST', updatedText: event.currentTarget.value});
    }
    const onBlurInputHandler = () => {
        setError('')
    }

    return (
        <div>
            <TextField onChange={onChangeInputHandler} value={newPostText} size={'small'}
                       error={!!error} helperText={error} onBlur={onBlurInputHandler}></TextField>
            <Button onClick={onClickAddPost}
                    variant={'contained'}
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