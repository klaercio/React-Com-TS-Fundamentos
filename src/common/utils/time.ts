export function tempoParaSegundos(tempo: string) {
    const [horas= '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const tempoParaSegundos = Number(horas) * 3600 + Number(minutos) *60 + Number(segundos);
    
    return tempoParaSegundos;
}