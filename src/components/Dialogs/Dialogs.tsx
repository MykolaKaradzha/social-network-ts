import React, {useState} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";

import Message from "./Message/Message";
import {MessagesType, UsersType} from "../../redux/state";
import Input from "../UniversalComps/Input/Input";

type propsType = {
    users:Array<UsersType>
    messages:Array<MessagesType>
}

export function Dialogs(props: propsType) {

    const dialogElements = props.users.map(user => <DialogItem key={user.id} name={user.name} id={user.id}/>)
    const MessagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>)

    const [message, setMessage] = useState<string>('')
    const onClickAddPost = () => {
        alert(message)
        setMessage('')
    }

    return (

        <section className={s.dialogs}>
            <article className={s.dialogItems}>
                {dialogElements}
            </article>
            <article className={s.messages}>
                {MessagesElements}
            </article>
            <button onClick={onClickAddPost}>Add</button>
            <Input currentValue={message} setState={setMessage} placeholder={"enter your message here"}/>
        </section>
    )

}