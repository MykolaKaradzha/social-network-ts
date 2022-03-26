import React from "react";
import { Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import {drawerWidth} from "../../App";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from "@mui/icons-material/Menu";



type PropsType = {
    openNavbar: () => void
    isNavbarOpen: boolean
}
interface AppBarProps extends MuiAppBarProps {
    isnavbaropen?: boolean;
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, isnavbaropen }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isnavbaropen && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Header:React.FC<PropsType> = ({openNavbar, isNavbarOpen}) => {

    return (
            <AppBar position={'fixed'} isnavbaropen={isNavbarOpen}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openNavbar}
                        edge="start"
                        sx={{ mr: 2, ...(isNavbarOpen && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1}}>
                        Menu
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )

}