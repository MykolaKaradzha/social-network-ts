import React from "react";
import {useNavigate} from "react-router-dom";
import {FriendsType} from "../../redux/store";
import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {DrawerHeader, drawerWidth} from "../../App";



type PropsType = FriendsType & {
    isNavbarOpen: boolean
    closeNavbar: () => void
}

export const Navbar: React.FC<PropsType> = ({isNavbarOpen, closeNavbar, friends}) => {
    const theme = useTheme();
    const navigate = useNavigate()
    return (
        <Drawer
            variant={'persistent'}
            anchor="left"
            open={isNavbarOpen}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <DrawerHeader>
                <IconButton onClick={closeNavbar}>
                    {theme.direction === 'ltr' ? <ChevronLeft/> : <ChevronRight/>}
                </IconButton>
            </DrawerHeader>
            <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/profile", {replace: true})}>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/dialogs", {replace: true})}>
                            <ListItemText primary="Dialogs"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/news", {replace: true})}>
                            <ListItemText primary="News"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/music", {replace: true})}>
                            <ListItemText primary="Music"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("/settings", {replace: true})}>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                </List>
        </Drawer>

    )

}