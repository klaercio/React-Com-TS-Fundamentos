import React from "react";
import botao from './botao.module.scss'

interface BotaoProps {
    text: string;
}

export default function Botao(props: BotaoProps) {
    return <>
        <button className={botao.botao}>{props.text}</button>
    </>
}
