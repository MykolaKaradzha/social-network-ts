import {DialogsPagetype} from "./store";
import {v1} from "uuid";
import {AddPostACType, RemovePostACType} from "./profile-reducer";


type ActionType = AddPostACType | RemovePostACType | AddMessageACType

export type AddMessageACType = ReturnType<typeof AddMessageAC>;

export const AddMessageAC = (messageText: string) => ({
        type: 'ADD-MESSAGE',
        payload: {messageText}
    } as const
)

export const DialogsReducer = (state: DialogsPagetype, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messages.push({id: v1(), message: action.payload.messageText});
            return state;
        default:
            return state
    }
}