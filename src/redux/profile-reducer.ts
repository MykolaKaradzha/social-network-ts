import {ProfilePagetype} from "./store";
import {v1} from "uuid";
import {AddMessageACType} from "./dialogs-reducer";


type ActionType = AddPostACType | RemovePostACType | AddMessageACType

export type AddPostACType = ReturnType<typeof AddPostAC>;

export type RemovePostACType = ReturnType<typeof RemovePostAC>;

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

export const ProfileReducer = (state:ProfilePagetype, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.unshift({id: v1(), message: action.payload.newPostText, likes: 0})
            return state;
        case "REMOVE-POST":
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
            return state;

        default:
            return state
    }
}