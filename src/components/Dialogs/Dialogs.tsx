import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import {AddMessageAC} from "../../redux/dialogs-reducer";
import {ActionType, MessagesType, UsersType} from "../../redux/redux-store";


type propsType = {
    users: Array<UsersType>
    messages: Array<MessagesType>
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<propsType> = ({users, messages, dispatch}) => {

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
        <div className={s.tableWrapper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant={'h6'}>
                                Name
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant={'h6'}>
                                Message
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {finalElements}
                </TableBody>
            </Table>
            <div className={s.controls}>
                <TextField size={'small'} value={message} onChange={onChangeHandler}
                           placeholder={"enter your message here"}/>
                <Button onClick={onClickAddMessage} color={'error'}>Add</Button>
            </div>

        </div>

    )

}
