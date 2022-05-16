import React from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import '../main.css';
import style from './app.module.scss';

function App() {
  return (<div className={style.AppStyle}>
    <Formulario/>
    <Lista/>
    <Cronometro/>
  </div>
  );
}

export default App;
