import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {MessagesType, UsersType} from "../../redux/store";
import Input from "../UniversalComps/Input/Input";
import {
    Button,
    List,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import {fireChangeForInputTimeIfValid} from "@testing-library/user-event/dist/keyboard/shared";

type propsType = {
    users: Array<UsersType>
    messages: Array<MessagesType>
}

export function Dialogs(props: propsType) {

    const dialogElements = props.users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>)
    const finalElements = [];
    for (let i = 0; i < dialogElements.length; i++) {
        let el = <TableRow>
            {dialogElements[i]}
            {messagesElements[i]}
        </TableRow>
        finalElements.push(el)
    }

    const [message, setMessage] = useState<string>('')
    const onClickAddPost = () => {
        if (message.trim()) {
            alert(message.trim())
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
                <TableHead/>
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
                <TableBody>
                    {finalElements}
                </TableBody>
            </Table>
            <div className={s.controls}>
                <Button onClick={onClickAddPost}>Add</Button>
                <TextField value={message} onChange={onChangeHandler} placeholder={"enter your message here"}/>
            </div>

        </div>

    )

}