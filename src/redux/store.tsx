import {v1} from "uuid";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SideBarReducer} from "./sidebar-reducer";
import {ActionType, StateType, StoreType} from "./redux-store";
//
//
//
//
//
// export const store: StoreType = {
//     state: {
//         DialogsPage: {
//             users: [
//                 {id: v1(), name: "Mykola"},
//                 {id: v1(), name: "Nastya"},
//                 {id: v1(), name: "Serhio"},
//                 {id: v1(), name: "Denchik"},
//                 {id: v1(), name: "Alexandro"},
//             ],
//             messages: [
//                 {id: v1(), message: "Wazzup"},
//                 {id: v1(), message: "Hola"},
//                 {id: v1(), message: "Comment ça va?"},
//                 {id: v1(), message: "Yo"},
//                 {id: v1(), message: "Hallo"},
//             ]
//         },
//         ProfilePage: {
//             posts: [
//                 {id: v1(), message: "Pantera", likes: 12},
//                 {id: v1(), message: "Metallica", likes: 13},
//                 {id: v1(), message: "Rammstein", likes: 15},
//                 {id: v1(), message: "Jack White", likes: 16},
//             ],
//         },
//         SideBar: {
//             friends: [
//                 {
//                     id: v1(),
//                     name: "Ben",
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ074mYAgZR1xhtf0DNuOStLws9_3zpADPuHPvFSyJoQm25HkwBp3u-9f15CxtOQRCu1s&usqp=CAU'
//                 },
//                 {
//                     id: v1(),
//                     name: "Jen",
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAZHgPSkmMDzDoAWw8UTHGFFQS9RF0X-k5Y_i1hJ3z5LIRpS7rUeFClEiqmOq1Rd8ysU&usqp=CAU'
//                 },
//                 {
//                     id: v1(),
//                     name: "Zen",
//                     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstMEzGPobkyxB2D2Xdk-A-9DnIcKtQbwPbg21dfAHD_OCvS8j5VpUMqvuYfsK-2p4ru4&usqp=CAU'
//                 },
//             ]
//         }
//     },
//     getState() {
//         return this.state;
//     },
//     callSubscriber() {
//     },
//     subscribe(observer: () => void) {
//         this.callSubscriber = observer;
//
//     },
//     dispatch(action: ActionType) {
//         this.state.ProfilePage = ProfileReducer(this.state.ProfilePage, action)
//         this.state.DialogsPage = DialogsReducer(this.state.DialogsPage, action)
//         this.state.SideBar = SideBarReducer(this.state.SideBar, action)
//     }
// }

