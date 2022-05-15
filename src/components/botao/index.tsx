import React from "react";
import './style.scss'

interface BotaoProps {
    text: string;
}

export default function Botao(props: BotaoProps) {
    return <>
        <button className="botao">{props.text}</button>
    </>
}
