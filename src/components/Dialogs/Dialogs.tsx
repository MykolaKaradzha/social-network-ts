import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

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



type propsType = {
    finalElements: JSX.Element[]
    onClickAddMessage: () => void
    message: string
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Dialogs: React.FC<propsType> = ({finalElements, onClickAddMessage, message, onChangeHandler}) => {


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
