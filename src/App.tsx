import React, {useState} from 'react';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Navigate, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DispatchType, StateType} from "./redux/store";
import {Box, Container, styled} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export const drawerWidth = 240;

const Main = styled('main', {
    shouldForwardProp: (prop) =>
        prop !== 'open'
})<{
    isnavbaropen?: boolean;
}>(({theme, isnavbaropen}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(isnavbaropen && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

type  PropsType = {
    state: StateType
    dispatch: (action: DispatchType) => void
}

function App(props: PropsType) {
    const [isNavbarOpen, setNavbar] = useState<boolean>(true)
    const closeNavbar = () => setNavbar(false)
    const openNavbar = () => setNavbar(true)

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header openNavbar={openNavbar} isNavbarOpen={isNavbarOpen}/>
            <Navbar friends={props.state.SideBar.friends} isNavbarOpen={isNavbarOpen} closeNavbar={closeNavbar}/>
            <Container maxWidth={"xl"}>
                <Main isnavbaropen={isNavbarOpen}>
                    <DrawerHeader/>
                    <Routes>
                        <Route path="/" element={<Navigate to='/profile'/>}/>


                        <Route path="/dialogs" element={<Dialogs users={props.state.DialogsPage.users}
                                                                 messages={props.state.DialogsPage.messages}
                        />}/>
                        <Route path="/profile" element={<Profile posts={props.state.ProfilePage.posts}
                                                                 newPostText={props.state.ProfilePage.newPostText}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </Main>
            </Container>
        </Box>
    );
}

export default App;
