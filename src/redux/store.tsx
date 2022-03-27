import {v1} from "uuid";
import {AddPostACType, ProfileReducer, RemovePostACType} from "./profile-reducer";
import {AddMessageACType, DialogsReducer} from "./dialogs-reducer";
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



export type DispatchType = AddPostACType | RemovePostACType |  AddMessageACType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: DispatchType) => void
}


export const store: StoreType = {
    _state: {
        DialogsPage: {
            users: [
                {id: v1(), name: "Mykola"},
                {id: v1(), name: "Nastya"},
                {id: v1(), name: "Serhio"},
                {id: v1(), name: "Denchik"},
                {id: v1(), name: "Alexandro"},
            ],
            messages: [
                {id: v1(), message: "Wazzup"},
                {id: v1(), message: "Hola"},
                {id: v1(), message: "Comment ça va?"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Hallo"},
            ]
        },
        ProfilePage: {
            posts: [
                {id: v1(), message: "Pantera", likes: 12},
                {id: v1(), message: "Metallica", likes: 13},
                {id: v1(), message: "Rammstein", likes: 15},
                {id: v1(), message: "Jack White", likes: 16},
            ],
        },
        SideBar: {
            friends: [
                {
                    id: v1(),
                    name: "Ben",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ074mYAgZR1xhtf0DNuOStLws9_3zpADPuHPvFSyJoQm25HkwBp3u-9f15CxtOQRCu1s&usqp=CAU'
                },
                {
                    id: v1(),
                    name: "Jen",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAZHgPSkmMDzDoAWw8UTHGFFQS9RF0X-k5Y_i1hJ3z5LIRpS7rUeFClEiqmOq1Rd8ysU&usqp=CAU'
                },
                {
                    id: v1(),
                    name: "Zen",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstMEzGPobkyxB2D2Xdk-A-9DnIcKtQbwPbg21dfAHD_OCvS8j5VpUMqvuYfsK-2p4ru4&usqp=CAU'
                },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer;

    },
    dispatch(action: DispatchType) {
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action)
        this._state.SideBar = SideBarReducer(this._state.SideBar, action)
    }
}

