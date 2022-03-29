import React from 'react';
import s from '../Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../../redux/redux-store";



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