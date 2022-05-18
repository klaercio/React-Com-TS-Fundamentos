import React, { useState, SetStateAction} from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../botao";
import formulario from "./formulario.module.scss";
import { v4 as uuidv4} from 'uuid';


interface FormularioProps {
    setTarefas : React.Dispatch<SetStateAction<ITarefa[]>>;
}

export default function Formulario(props:FormularioProps ){

    const [tarefa, setTarefa] = useState({tarefa: "", tempo: "00:00:00"});

    function adicionarTarefa(evento: React.FormEvent ) {
        evento.preventDefault();
        props.setTarefas( tarefasAntigas =>
             [...tarefasAntigas,
             {...tarefa, 
             selecionado: false,
             completado:false,
             id: uuidv4()}
            ]);
        setTarefa({tarefa: "", tempo: "00:00:00"});
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