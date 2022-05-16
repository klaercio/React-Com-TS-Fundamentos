import React from "react";
import Botao from "../botao";
import formulario from "./formulario.module.scss";

export default function Formulario() {
    return <>
        <form className={formulario.novaTarefa}>
            <div className={formulario.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required/>
            </div>
            <div className={formulario.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo"
                min="00:00:00" max="99:59:59" required/>
            </div>
            <Botao text="Enviar"/>
        </form>
    </>
}