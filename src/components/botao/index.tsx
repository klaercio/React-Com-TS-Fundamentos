import React from "react";
import botao from './botao.module.scss';

interface BotaoProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onCli?: ()=>void;
}

export default function Botao(props: BotaoProps) {

    const tipo = props.type === undefined? 'button' : props.type;

    return <>
        <button className={botao.botao}  type={tipo} onClick={props.onCli}>{props.text}</button>
    </>
}
