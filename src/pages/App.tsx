import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import '../main.css';
import style from './app.module.scss';

interface Argumentos {
   tarefa: string;
   tempo: string;
}

function App() {
  const [tarefas, setTarefas] = useState<Argumentos[]>();
  
  return (<div className={style.AppStyle}>
    <Formulario tarefas={tarefas} setTar={()=>setTarefas()}/>
    <Lista tarefas={tarefas}/>
    <Cronometro/>
  </div>
  );
}

export default App;
