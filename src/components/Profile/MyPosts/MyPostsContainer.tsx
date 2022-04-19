import React from "react";
import {AddPostAC, RemovePostAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {PostsType, StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// export const MyPostsContainer:React.FC<propsType> = ({store, state}) => {
//
//     const posts = state.ProfilePage.posts;
//     const dispatch = store.dispatch;
//     const PostsElements = posts.map( post=> <Post key={post.id} {...post} dispatch={(dispatch)} />);
//     const [error, setError] = useState<string>('');
//     const [postText, setPostText] = useState<string>('');
//     const onClickAddPost = () => {
//         if (postText.trim()) {
//             dispatch(AddPostAC(postText.trim()));
//             setPostText('')
//         } else {
//             setError("enter something, bro")
//         }
//     }
//     const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
//             setPostText(event.currentTarget.value);
//     }
//     const onBlurInputHandler = () => {
//         setError('');
//     }
//
//     return (<MyPosts PostsElements={PostsElements} error={error}
//                      onClickAddPost={onClickAddPost} onBlurInputHandler={onBlurInputHandler}
//                      onChangeInputHandler={onChangeInputHandler} postText={postText}/>)
// }


type mapStateToPropsType = {
    posts: PostsType[]
}
type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    removePost: (id: string) => void
}

export type MyPostsType = mapDispatchToPropsType & mapStateToPropsType


const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    posts: state.ProfilePage.posts,
})
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    addPost: (postText:string) => dispatch(AddPostAC(postText)),
    removePost: (id: string) => dispatch(RemovePostAC(id))
})


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)