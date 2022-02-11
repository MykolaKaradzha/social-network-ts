import React from "react";
import s from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.wallpaper} src="https://images4.alphacoders.com/602/602004.jpg"
                     alt="wallpaper-lake-mountains"/>
            </div>
            <div>Info about me</div>
        </div>
    )
}