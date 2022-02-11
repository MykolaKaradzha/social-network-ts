import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";

import Message from "./Message/Message";
import {usersType} from "../../index";

type propsType = {
    users:Array<usersType>
}

export function Dialogs(props: propsType) {
    const dialogItemsMapped = props.users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
    const MessagesMapped = props.users.map(user => <Message key={user.id} message={user.message}/>)
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogItemsMapped}
            </div>
            <div className={s.messages}>
                {MessagesMapped}
            </div>
        </div>
    )

}