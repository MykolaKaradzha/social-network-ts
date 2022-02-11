import React from 'react';
import s from "../Dialogs.module.css";

type propsType = {
    message: string
}

const Message = (props: propsType) => {
    return (
            <div className={s.message}>
                {props.message}
            </div>
    );
};

export default Message;