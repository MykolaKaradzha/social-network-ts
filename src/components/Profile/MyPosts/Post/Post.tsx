import React from "react";
import s from './Post.module.css';
import {postsType} from "../../../../index";



export function Post(props: postsType) {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU"
                alt="relaxing cat"/>
            <span>{props.message}</span>
            <div>

                <span>LikesCount: {props.likes}</span>
            </div>

        </div>
    )
}