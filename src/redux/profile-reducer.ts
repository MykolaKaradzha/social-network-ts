import {v1} from "uuid";
import {ActionType, ProfilePagetype} from "./redux-store";


export const AddPostAC = (newPostText: string) => ({
        type: 'ADD-POST',
        payload: {newPostText}
    } as const
);

export const RemovePostAC = (id: string) => ({
        type: 'REMOVE-POST',
        payload: {
            id
        }
    } as const
)

const initialState: ProfilePagetype = {
    posts: [
        {id: v1(), message: "Pantera", likes: 12},
        {id: v1(), message: "Metallica", likes: 13},
        {id: v1(), message: "Rammstein", likes: 15},
        {id: v1(), message: "Jack White", likes: 16},
    ],
}


export const ProfileReducer = (state:ProfilePagetype = initialState, action: ActionType): ProfilePagetype => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state,
                    posts: [{id: v1(), message: action.payload.newPostText, likes: 0}, ...state.posts]}

        case "REMOVE-POST":
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.id)
            }
        default:
            return state
    }
}