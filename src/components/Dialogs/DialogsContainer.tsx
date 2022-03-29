import React, {ChangeEvent, useState} from "react";

import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    TableCell,
    TableRow,

} from "@mui/material";
import {AddMessageAC} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {StateType, StoreType} from "../../redux/redux-store";


type propsType = {
    store: StoreType
    state: StateType
}

export const DialogsContainer: React.FC<propsType> = ({store, state}) => {

    const users = state.DialogsPage.users;
    const messages = state.DialogsPage.messages;
    const dispatch = store.dispatch

    const dialogElements = users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
    const messagesElements = messages.map(message => <Message key={message.id} message={message.message}
                                                              id={message.id}/>)
    const finalElements = [];
    for (let i = 0; i < messagesElements.length; i++) {
        let el = <TableRow key={`${i} DialogsTableRow`}>
            {dialogElements[i] ? dialogElements[i] : <TableCell></TableCell>}
            {messagesElements[i]}
        </TableRow>
        finalElements.push(el)
    }

    const [message, setMessage] = useState<string>('')

    const onClickAddMessage = () => {
        if (message.trim()) {
            dispatch(AddMessageAC(message))
            setMessage('')
        } else {
            alert('enter something!')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    return (
        <Dialogs message={message} finalElements={finalElements}
                      onChangeHandler={onChangeHandler} onClickAddMessage={onClickAddMessage} />
    )

}
