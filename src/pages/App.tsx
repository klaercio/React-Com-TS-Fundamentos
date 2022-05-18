import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import '../main.css';
import { ITarefa } from '../types/ITarefa';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa ) {
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id? true: false,
      })))
  }

  return (<div className={style.AppStyle}>
    <Formulario setTarefas={setTarefas}/>
    <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
    <Cronometro/>
  </div>
  );
}

export default App;
