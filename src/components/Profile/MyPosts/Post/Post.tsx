import React from "react";
import {DispatchType, PostsType} from "../../../../redux/store";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import {Delete} from "@mui/icons-material";


type PropsType = PostsType & {
    dispatch: (action: DispatchType) => void
}


export const Post: React.FC<PropsType> = ({message, id, likes, dispatch}) => {

    const onClickRemovePostHandler = () => {
        dispatch({title: 'REMOVE-POST', id})
    }
    return (
        <>
            <Card sx={{maxWidth: 345, display: "flex", flexFlow: "wrap column", alignItems: "center"}}>
                <CardMedia
                    component={'img'}
                    height={250}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU'}
                    alt="relaxing cat"
                    sx={{borderRadius: '45%'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {message}
                    </Typography>
                    <Typography variant="body2" component="div" color="text.secondary">
                        LikesCount: {likes}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={onClickRemovePostHandler} color={'error'} sx={{ml: 5}}>
                        <Delete/>
                    </IconButton>
                </CardActions>
            </Card>
        </>

        // <Grid container>
        //     <Grid item>
        //         <Avatar sx={{width:100, height:100}}
        //                 alt="relaxing cat"
        //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU" />
        //         <Typography sx={{padding: 1}}>
        //             {message}
        //         </Typography>
        //         <Typography>
        //             LikesCount: {likes}
        //         </Typography>
        //     </Grid>
        //     <Grid item>
        //         <IconButton onClick={onClickRemovePostHandler} color={'error'} sx={{ml: 5}}>
        //             <Delete/>
        //         </IconButton>
        //     </Grid>
        // </Grid>
    )
}