import React from "react";
import lista from "./lista.module.scss";
import Item from "./item";

export default function Lista() {

    const tarefas = [{
        tarefa:'react',
        tempo: '02:00:00'
    }, {
        tarefa:'javascript',
        tempo: '01:30:00'
    }, {
        tarefa:'typescript',
        tempo:'03:00:00'
    }, {
        tarefa:'sei la',
        tempo:'05:00:00'
    }]
    
    return<>
        <aside className={lista.listaTarefas}>
            <ul>
                {
                    tarefas.map((objeto, indice)=> {
                        return <>
                                <Item key={indice} {...objeto}/>
                        </>;
                    })
                }
            </ul>
        </aside>
    </>
}