import React from "react";
import s from "./Header.module.css";

export function Header() {
    return <header className={s.header}>
        <img className={s.logo}
             src="https://cdn.worldvectorlogo.com/logos/svg.svg"
             alt="logo"/>
    </header>;
}