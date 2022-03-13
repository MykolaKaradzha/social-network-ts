import React from 'react';

type PropsType = {
    currentValue: string
    setState: (currentValue: string) => void
    placeholder?: string
}

const Input = (props: PropsType) => {
    const onChangeInputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        props.setState(event.currentTarget.value)
    }
    return (
        <>
            <input type="text" value={props.currentValue} onChange={onChangeInputHandler} placeholder={props.placeholder}/>
        </>
    );
};

export default Input;