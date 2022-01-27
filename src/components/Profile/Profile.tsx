import React from "react";
import s from './Profile.module.css';

export function Profile() {
    return <main className={s.main}>
        <div>
            <img className={s.wallpaper} src="https://images4.alphacoders.com/602/602004.jpg"
                 alt="wallpaper-lake-mountains"/>
        </div>
        <div>Info about me</div>
        <div> My posts
            <div>New post</div>
        </div>
    </main>;
}