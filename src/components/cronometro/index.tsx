import Relogio from './relogio'
import Botao from "../botao";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/ITarefa';
import { useEffect, useState } from 'react';
import { setTimeout } from 'timers';

interface CronometroProps {
    selecionado: ITarefa | undefined;
}

export default function Cronometro({selecionado}: CronometroProps) {

    const [tempo, setTempo] = useState<number>();

    function regressiva(tempo: number = 0) {
        window.setTimeout(()=> {
            if(tempo > 0) {
                setTempo(tempo - 1);
                return regressiva(tempo - 1);
            }
        }, 1000);
    }

    useEffect(()=> {
        if(selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo));
    }, [selecionado]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao text="começar" onCli={()=>regressiva(tempo)} />
        </div>
    )
}