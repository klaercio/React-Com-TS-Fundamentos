import lista from "./lista.module.scss";
import Item from "./item";
import { ITarefa } from "../../types/ITarefa";


export default function Lista( {tarefas} : {tarefas: ITarefa[]} ) {
    
    return<>
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>
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