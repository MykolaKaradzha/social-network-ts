import React, {ChangeEvent} from "react";
import {Button, List, TextField} from "@mui/material";

type propsType = {
    PostsElements: JSX.Element[]
    onChangeInputHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onClickAddPost: () => void
    postText: string
    error: string
    onBlurInputHandler: () => void
}

export const MyPosts:React.FC<propsType> = ({PostsElements, onClickAddPost,
                                                postText , onChangeInputHandler,
                                                onBlurInputHandler, error}) => {
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