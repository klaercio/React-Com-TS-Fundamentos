import lista from "./lista.module.scss";
import Item from "./item";
import { ITarefa } from "../../types/ITarefa";

interface ListaProps {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}


export default function Lista( {tarefas, selecionaTarefa} : ListaProps ) {
    
    return<>
        <aside className={lista.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map((objeto, indice)=> {
                        return <>
                                <Item  key={objeto.id} {...objeto} selecionaTarefa={selecionaTarefa}/>
                        </>;
                    })
                }
            </ul>
        </aside>
    </>
}