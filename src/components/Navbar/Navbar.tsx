import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import {FriendsType} from "../../redux/state";



export function Navbar(props: FriendsType) {
    const classNameForNavLink = (navData:any) => navData.isActive ? s.active : ''

    return <nav className={s.navbar}>
        <div className={s.item}><NavLink to="/profile" className={classNameForNavLink}>Profile</NavLink></div>
        <div className={s.item}><NavLink to="/dialogs" className={classNameForNavLink}>Dialogs</NavLink></div>
        <div className={s.item}><NavLink to="/news" className={classNameForNavLink}>News</NavLink></div>
        <div className={s.item}><NavLink to="/music" className={classNameForNavLink}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/settings" className={classNameForNavLink}>Settings</NavLink></div>
        <Sidebar friends={props.friends}/>
    </nav>;
}