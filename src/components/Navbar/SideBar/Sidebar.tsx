import React from 'react';
import {FriendsType} from "../../../redux/store";
import s from '../Navbar.module.css'
import {NavLink} from "react-router-dom";



const Sidebar = (props: FriendsType) => {
    const friendsMapped = props.friends.map(friend =>
        <div key={friend.id}>
            <img src={friend.avatar} alt="friend"/>
            <div><NavLink to={`/${friend.id}`} className={navData => navData.isActive ? s.active : ''}>{friend.name}</NavLink></div>
        </div>
    )
    return (
        <div className={s.sidebar}>
            {friendsMapped}
        </div>
    );
};

export default Sidebar;