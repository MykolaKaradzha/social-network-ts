import React, {ChangeEvent, useState} from "react";
import {Post} from './Post/Post';
import {AddPostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StateType, StoreType} from "../../../redux/redux-store";


type propsType = {
    store:StoreType
    state: StateType
}

export const MyPostsContainer:React.FC<propsType> = ({store, state}) => {

    const posts = state.ProfilePage.posts;
    const dispatch = store.dispatch;
    const PostsElements = posts.map( post=> <Post key={post.id} {...post} dispatch={(dispatch)} />);
    const [error, setError] = useState<string>('');
    const [postText, setPostText] = useState<string>('');
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
        setError('');
    }

    return (<MyPosts PostsElements={PostsElements} error={error}
                     onClickAddPost={onClickAddPost} onBlurInputHandler={onBlurInputHandler}
                     onChangeInputHandler={onChangeInputHandler} postText={postText}/>)
}