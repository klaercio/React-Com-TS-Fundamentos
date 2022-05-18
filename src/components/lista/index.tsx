import lista from "./lista.module.scss";
import Item from "./item";

interface Argumentos {
    tarefa: string;
    tempo: string;
}

interface ListaProps {
    tarefas: Argumentos[];
}

export default function Lista( props: ListaProps ) {
    
    return<>
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    props.tarefas.map((objeto, indice)=> {
                        return <>
                                <Item key={indice} {...objeto}/>
                        </>;
                    })
                }
            </ul>
        </aside>
    </>
}