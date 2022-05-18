import React from "react";
import { ITarefa } from "../../../types/ITarefa";
import lista from "../lista.module.scss"

interface ItemProps extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: ItemProps) {
    return <>
        <li className={`${lista.item} ${selecionado ? lista.itemSelecionado: ""}`} onClick={()=> selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3> 
            <span>{tempo}</span>
        </li>
    </>
}