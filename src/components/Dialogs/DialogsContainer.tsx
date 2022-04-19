import React from "react";
import {AddMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {MessagesType, StateType, UserType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";




// export const DialogsContainer: React.FC<propsType> = ({store, state}) => {
//
//     const users = state.DialogsPage.users;
//     const messages = state.DialogsPage.messages;
//     const dispatch = store.dispatch
//
//     const dialogElements = users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
//     const messagesElements = messages.map(message => <Message key={message.id} message={message.message}
//                                                               id={message.id}/>)
//     const finalElements = [];
//     for (let i = 0; i < messagesElements.length; i++) {
//         let el = <TableRow key={`${i} DialogsTableRow`}>
//             {dialogElements[i] ? dialogElements[i] : <TableCell></TableCell>}
//             {messagesElements[i]}
//         </TableRow>
//         finalElements.push(el)
//     }
//
//     const [message, setMessage] = useState<string>('')
//
//     const addMessage = () => {
//         if (message.trim()) {
//             dispatch(AddMessageAC(message))
//             setMessage('')
//         } else {
//             alert('enter something!')
//         }
//     }
//
//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setMessage(event.currentTarget.value)
//     }
//
//     return (
//         <Dialogs message={message} finalElements={finalElements}
//                  onChangeHandler={onChangeHandler} addMessage={addMessage}/>
//     )
//
// }


type mapStateToPropsType = {
    users: Array<UserType>
    messages: Array<MessagesType>
}

type mapDispatchToProps = {
    addMessage: (message: string) => void
}
export type DialogsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.DialogsPage.users,
    messages: state.DialogsPage.messages
})
const mapDispatchToProps = (dispatch:Dispatch): mapDispatchToProps => ({
    addMessage: (message:string) => {
            dispatch(AddMessageAC(message))
}})
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
