import Relogio from './relogio'
import Botao from "../botao";
import style from './Cronometro.module.scss';

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao text="começar"/>
        </div>
    )
}