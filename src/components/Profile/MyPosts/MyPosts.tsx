import React, {ChangeEvent, useState} from "react";
import {Button, List, TextField} from "@mui/material";
import {Post} from "./Post/Post";
import {AddPostAC} from "../../../redux/profile-reducer";
import {MyPostsType} from "./MyPostsContainer";



export const MyPosts:React.FC<MyPostsType> = ({posts, addPost, removePost}) => {
    const PostsElements = posts.map( post=> <Post key={post.id} removePost={removePost} {...post}/>);
    const [error, setError] = useState<string>('');
    const [postText, setPostText] = useState<string>('');
    const onClickAddPost = () => {
        if (postText.trim()) {
            addPost(postText.trim())
            setPostText('')
        } else {
            setError("enter something, bro")
        }
    }
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPostText(event.currentTarget.value);
    }
    const onBlurInputHandler = () => {
        setError('');
    }
    return (
        <div>
            <TextField onChange={onChangeInputHandler} value={postText} size={'small'}
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