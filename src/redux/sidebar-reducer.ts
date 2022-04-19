import {ActionType, FriendsType} from "./redux-store";
import {v1} from "uuid";

const initialState:FriendsType = {
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

export const SideBarReducer = (state:FriendsType = initialState, action: ActionType) : FriendsType => {
    return state
}