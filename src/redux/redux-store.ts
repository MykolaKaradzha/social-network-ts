import {combineReducers, createStore} from "redux";
import {AddPostAC, ProfileReducer, RemovePostAC} from "./profile-reducer";
import {AddMessageAC, DialogsReducer} from "./dialogs-reducer";
import Sidebar from "../components/Navbar/SideBar/Sidebar";
import {SideBarReducer} from "./sidebar-reducer";


export type UsersType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    message: string;
    likes: number;
}
export type DialogsPagetype = {
    users: Array<UsersType>
    messages: Array<MessagesType>
}
export type ProfilePagetype = {
    posts: Array<PostsType>
}

export type PersonType = {
    id: string
    name: string
    avatar: string
}
export type FriendsType = {
    friends: Array<PersonType>
}

export type StateType = {
    ProfilePage: ProfilePagetype
    DialogsPage: DialogsPagetype
    SideBar: FriendsType
}

export type StoreType = typeof store

export type ActionType = ReturnType<typeof AddPostAC> | ReturnType<typeof RemovePostAC> | ReturnType<typeof AddMessageAC>

const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SideBarReducer,

})

export const store = createStore(reducers);