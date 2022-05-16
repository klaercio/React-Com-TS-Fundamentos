import React from "react";
import lista from "../lista.module.scss"

interface ItemProps {
    tarefa :string;
    tempo: string;
}

export default function Item(props: ItemProps) {
    return <>
        <li className={lista.item}>
            <h3>{props.tarefa}</h3> 
            <span>{props.tempo}</span>
        </li>
    </>
}