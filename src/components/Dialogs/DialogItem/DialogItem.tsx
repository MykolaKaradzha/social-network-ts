
import {useNavigate} from "react-router-dom";
import React from "react";
import {Button, TableCell} from "@mui/material";

type propsType = {
    id: string
    name: string
}

export const DialogItem = (props: propsType) => {
    const navigate = useNavigate();
    const path = `dialogs/${props.id}`;
    return (
            <TableCell key={props.id}>
                <Button onClick={() => navigate(path)}>{props.name}</Button>
            </TableCell>
    )
}