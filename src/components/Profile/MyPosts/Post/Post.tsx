import React from "react";

import {PostsType} from "../../../../redux/state";
import {Avatar, Button, Grid, Typography} from "@mui/material";


type PropsType = PostsType & {removePost: (id:string) => void}


export const Post:React.FC<PropsType> = ({message, id, likes, removePost}) => {

    const onClickRemovePostHandler = () => {
        removePost(id)
    }
    return (
        <Grid container>
            <Grid item>
                <Avatar sx={{width:100, height:100}}
                        alt="relaxing cat"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU" />
                <Typography sx={{padding: 1}}>
                    {message}
                </Typography>
                <Typography>
                    LikesCount: {likes}
                </Typography>
            </Grid>
            <Grid item>
                <Button onClick={onClickRemovePostHandler} variant={'contained'} size={'small'} color={'error'}>X</Button>
            </Grid>




        </Grid>
    )
}