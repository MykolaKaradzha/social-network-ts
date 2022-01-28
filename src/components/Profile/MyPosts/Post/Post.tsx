import React from "react";
import s from './Post.module.css';

type propsType = {
    message: string;
}

export function Post(props: propsType) {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeiOZ4vmdV-ltdJ32X1J2wdEu-ejWGgu7SA&usqp=CAU"
                alt="relaxing cat"/>
            {props.message}
            <div>
                <span>like</span>
            </div>

        </div>
    )
}