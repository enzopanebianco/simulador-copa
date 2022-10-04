import { grupos } from "./constantes/Grupos.js";
import { Partida } from "./Partida.js";

const tabelaOitavas = {
    '0': '3',
    '2': '1',
    '4': '7',
    '6': '5',
    '8': '11',
    '10': '9',
    '12': '15',
    '14': '13'
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

const tabelaFinal = {
    '0':'1'
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

    simularCopa(){
        let classificados = this.simularGrupos();

        const tabelas = [tabelaOitavas,tabelaQuartas,tabelaSemis,tabelaFinal]

        tabelas.forEach(tabela=>{
            classificados =  Object.entries(tabela).map(jogo=>{

                const partida = new Partida(classificados[jogo[0]],classificados[jogo[1]])

                const vencedor = partida.jogarMataMata()

                return vencedor
            })
            console.table(classificados)
        })
    }

}