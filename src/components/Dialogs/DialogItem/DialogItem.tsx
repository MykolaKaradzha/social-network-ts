import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type propsType = {
    id: string
    name: string
}

export const DialogItem = (props: propsType) => {
    const path = `dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}