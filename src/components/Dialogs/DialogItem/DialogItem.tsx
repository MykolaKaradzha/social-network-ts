import s from "../Dialogs.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";
import {Button, Divider, ListItem, ListItemButton, ListItemText, TableCell, TableRow} from "@mui/material";

type propsType = {
    id: string
    name: string
}

export const DialogItem = (props: propsType) => {
    const navigate = useNavigate();
    const path = `dialogs/${props.id}`;
    return (
            <TableCell>
                <Button onClick={() => navigate(path)}>{props.name}</Button>
            </TableCell>
    )
}