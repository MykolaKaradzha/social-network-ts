import React from "react";
import s from './Post.module.css';

export function Post() {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU"
                alt="relaxing cat"/>
            Post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}