import React from "react";

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
        <aside>
            <ul className="list-none">
                {
                    tarefas.map((objeto, indice)=> {
                        return <>
                                <li key={indice}>
                                    <h3>{objeto.tarefa}</h3>
                                    <span>{objeto.tempo}</span>
                                </li>
                        </>;
                    })
                }
            </ul>
        </aside>
    </>
}