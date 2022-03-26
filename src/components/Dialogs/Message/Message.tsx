import React from 'react';
import {Button, Divider, ListItem, ListItemButton, ListItemText, TableCell} from "@mui/material";

type propsType = {
    message: string
}



const Message = (props: propsType) => {
    return (
            <TableCell>
                {props.message}
            </TableCell>
    );
};

export default Message;