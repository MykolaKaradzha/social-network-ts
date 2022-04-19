import {v1} from "uuid";
import {ActionType, DialogsPagetype} from "./redux-store";


export const AddMessageAC = (messageText: string) => ({
        type: 'ADD-MESSAGE',
        payload: {messageText}
    } as const
)

const initialState:DialogsPagetype = {
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
}


export const DialogsReducer = (state: DialogsPagetype = initialState, action: ActionType): DialogsPagetype => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state,
                messages: [...state.messages, {id: v1(), message: action.payload.messageText}]
            }
        default:
            return state
    }
}