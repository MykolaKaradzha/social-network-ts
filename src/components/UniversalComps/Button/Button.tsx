import React from 'react';
import s from "./Button.module.css"

type PropsType = {
    name: string
    callBack: () => void
    className?: string
}

const Button:React.FC<PropsType> = ({name, className, callBack}) => {
    const onButtonClickHandler = () => {
        callBack()
    }
    return (
        <>
            <button className={`${className} ${s.button}`} onClick={onButtonClickHandler}>{name}</button>
        </>
    );
};

export default Button;