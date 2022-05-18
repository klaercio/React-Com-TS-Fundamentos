import React, { useState } from "react";
import Botao from "../botao";
import formulario from "./formulario.module.scss";

interface Argumentos {
    tarefa: string;
    tempo: string;
}

interface FormularioProps {
    tarefas: Argumentos[];
    setTar: ()=>void;
}


export default function Formulario(props: FormularioProps) {

    const [tarefa, setTarefa] = useState({tarefa: "", tempo: "00:00:00"});

    function adicionarTarefa(evento: React.FormEvent ) {
        evento.preventDefault();
        props.setTar( Anteriores =>[...Anteriores, {tarefa}]);
    }

    return <>
        <form className={formulario.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={formulario.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" value={tarefa.tarefa} onChange={evento=> {setTarefa({tarefa: evento.target.value, tempo:`${[tarefa.tempo]}`})}} id="tarefa" placeholder="O que você quer estudar?" required/>
            </div>
            <div className={formulario.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo"
                min="00:00:00" max="99:59:59" value={tarefa.tempo} required
                onChange={evento=> {setTarefa({tarefa: `${[tarefa.tarefa]}`, tempo: evento.target.value})}}/>
            </div>
            <Botao text="Adicionar" type="submit"/>
        </form>
    </>
}