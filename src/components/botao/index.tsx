import React from "react";
import botao from './botao.module.scss';

interface BotaoProps {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function Botao(props: BotaoProps) {

    const tipo = props.type === undefined? 'button' : props.type;

    return <>
        <button className={botao.botao}  type={tipo}>{props.text}</button>
    </>
}
