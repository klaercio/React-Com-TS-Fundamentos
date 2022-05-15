import React from "react";

interface BotaoProps {
    text: string;
}

export default function Botao(props: BotaoProps) {
    return <>
        <button className="bg-blue-500 rounded-[5px] w-[20rem]">{props.text}</button>
    </>
}
