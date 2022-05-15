import React from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import '../main.css';
import './style.scss';

function App() {
  return (<div className='AppStyle'>
    <Formulario/>
    <Lista/>
  </div>
  );
}

export default App;