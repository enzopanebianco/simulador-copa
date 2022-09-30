import { grupos } from "./constantes/Grupos.js";
import { Partida } from "./Partida.js";

const tabelaOitavas = {
    'A1': 'B2',
    'B1': 'A2',
    'C1': 'D2',
    'D1': 'C2',
    'E1': 'F2',
    'F1': 'E2',
    'G1': 'H2',
    'H1': 'G2'
}

const tabelaQuartas = {
    '0':'2',
    '1':'3',
    '4':'6',
    '5':'7'
}

const tabelaSemis = {
    '0':'2',
    '1':'3'
}

export class Simulacao {
    simularGrupos() {
        const classificados = []
        grupos.forEach(grupo => {

            const classificadosPorGrupo = grupo.simularGrupo()
            classificados.push(classificadosPorGrupo)
        })

        console.table(classificados.flat())
        return classificados.flat()
    }
    simularOitavas() {
        const classificados = this.simularGrupos();

        // pegando so os primeiros colocados para nao duplicar os jogos
        const classificadosQuartas = classificados
            .filter(classificado => classificado.posicaoGrupo.includes('1'))
            .map(classificado => {
                const visitante = classificados.find(selecao =>
                    selecao.posicaoGrupo === tabelaOitavas[classificado.grupo + '1']
                )
                const partida = new Partida(classificado, visitante)

                const vencedor = partida.jogarMataMata()

                return vencedor
            })
        console.table(classificadosQuartas)
        return classificadosQuartas
    }
    simularQuartas(){
        const classificados = this.simularOitavas()
        const classificadosSemis = []
        Object.entries(tabelaQuartas).forEach(jogos=>{
            const partida = new Partida(classificados[jogos[0]],classificados[jogos[1]])

            const vencedor =  partida.jogarMataMata()
            classificadosSemis.push(vencedor)
        })
        console.table(classificadosSemis)

        return classificadosSemis
    }
    simularSemis(){
        const classificados = this.simularQuartas()
        const classificadosFinal = []
        Object.entries(tabelaSemis).forEach(jogos=>{
          
            const partida = new Partida(classificados[jogos[0]],classificados[jogos[1]])

            const vencedor =  partida.jogarMataMata()
            classificadosFinal.push(vencedor)
        })
        console.table(classificadosFinal)
        return classificadosFinal
    }

    simularFinal(){
        const finalistas = this.simularSemis()

        const partida = new Partida(finalistas[0],finalistas[1])

        const vencedor = partida.jogarMataMata()

        console.table(vencedor)
    }
}