import {FriendsType} from "./store";
import {AddPostACType, RemovePostACType} from "./profile-reducer";
import {AddMessageACType} from "./dialogs-reducer";

type ActionType = AddPostACType | RemovePostACType | AddMessageACType

export const SideBarReducer = (state:FriendsType, action: ActionType) => {
    return state
}