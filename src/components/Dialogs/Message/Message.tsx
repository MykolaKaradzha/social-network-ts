import React from 'react';
import {Button, Divider, ListItem, ListItemButton, ListItemText, TableCell} from "@mui/material";

type propsType = {
    message: string
    id: string
}



const Message = (props: propsType) => {
    return (
            <TableCell key={props.id}>
                {props.message}
            </TableCell>
    );
};

export default Message;