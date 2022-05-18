import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import '../main.css';
import { ITarefa } from '../types/ITarefa';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  
  return (<div className={style.AppStyle}>
    <Formulario setTarefas={setTarefas}/>
    <Lista tarefas={tarefas}/>
    <Cronometro/>
  </div>
  );
}

export default App;
