import style from './relogio.module.scss'

interface RelogioProps{
    tempo: number | undefined;
}

export default function relogio({tempo = 0}: RelogioProps) {

    const [minutoDezena, minutoUnidade] = String(Math.floor(tempo / 60)).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(tempo % 60).padStart(2, "0");

    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}