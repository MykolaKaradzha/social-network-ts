import {v1} from "uuid";

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
type DialogsPagetype = {
    users: Array<UsersType>
    messages: Array<MessagesType>
}
type ProfilePagetype = {
    posts: Array<PostsType>
    newPostText: string
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

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    // addPost: (newText: string) => void
    // updatePost : (updatedText: string) => void
    // removePost : (id: string) => void
    dispatch: (action: DispatchType) => void
}

export type DispatchType = AddPostACType | UpdatePostACType | RemovePostACType

type AddPostACType = ReturnType<typeof AddPostAC>;
type UpdatePostACType = ReturnType<typeof UpdatePostAC>;
type RemovePostACType = ReturnType<typeof RemovePostAC>;

export const AddPostAC = () => (
    {title: 'ADD-POST'} as const
);

export const UpdatePostAC = (updatedText: string) => ({
        title: 'UPDATE-POST',
        payload: {
            updatedText
        }
    } as const
)
export const RemovePostAC = (id: string) => ({
        title: 'REMOVE-POST',
        payload: {
            id
        }
    } as const
)


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
            newPostText: 'It-kamasutra'
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
        switch (action.title) {
            case 'ADD-POST':
                this._state.ProfilePage.posts.unshift(
                    {id: v1(), message: this._state.ProfilePage.newPostText, likes: 0});
                this._state.ProfilePage.newPostText = ''
                this._callSubscriber();
                break
            case "UPDATE-POST":
                this._state.ProfilePage.newPostText = action.payload.updatedText
                this._callSubscriber();
                break
            case "REMOVE-POST":
                this._state.ProfilePage.posts = this._state.ProfilePage.posts.filter(post => post.id !== action.payload.id);
                this._callSubscriber()
                break
            default:
                this._callSubscriber();
                break
        }
        // addPost (newText: string) {
        //     this._state.ProfilePage.posts.unshift({id: v1(), message: newText, likes: 0})
        //     this.updatePost('');
        //     this._callSubscriber(store)
        // },
        // updatePost (updatedText: string) {
        //     this._state.ProfilePage.newPostText = updatedText
        //     this._callSubscriber(store)
        // },
        // removePost (id: string) {
        //     this._state.ProfilePage.posts = this._state.ProfilePage.posts.filter(post=> post.id !== id);
        //     this._callSubscriber(store)
        // }
    }
}

