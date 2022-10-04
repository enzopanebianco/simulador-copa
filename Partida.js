const fases = ["Oitavas", "Quartas", "Semis", "Final", "Campeão"]

//na partida, separamos os times em casa e visitante,
//a ordem não importa e não afetará o resultado 
export class Partida {

    constructor(selecaoCasa, selecaoVisitante) {
        this.selecaoCasa = selecaoCasa
        this.selecaoVisitante = selecaoVisitante
    }
    jogar() {

        const rangeGols = [0, 1, 2, 3]
        const casaGols = Math.floor(Math.random() * rangeGols.length)
        const visitanteGols = Math.floor(Math.random() * rangeGols.length)
        //setar gols e saldo
        this.selecaoCasa.gols += casaGols
        this.selecaoVisitante.gols += visitanteGols

        this.selecaoCasa.saldo = this.selecaoCasa.saldo + (casaGols - visitanteGols)
        this.selecaoVisitante.saldo = this.selecaoVisitante.saldo + (visitanteGols - casaGols)

        const placar = ` ${this.selecaoCasa.nome} ${casaGols} X ` +
            `${visitanteGols} ${this.selecaoVisitante.nome}`

        if (casaGols === visitanteGols) return { vencedor: null, derrotado: null, placar }

        let vencedor = casaGols > visitanteGols ?
            this.selecaoCasa : this.selecaoVisitante
        let derrotado = casaGols < visitanteGols ?
            this.selecaoCasa : this.selecaoVisitante
        // Caso vitoria setar 3 pontos para a selecao vencedora e setar vitorias e derrotas
        vencedor.vitorias += 1
        derrotado.derrotas += 1
        vencedor.pontuacao += 3
        return {
            vencedor,
            derrotado,
            placar
        }
    }

    jogarFaseDeGrupos() {
        const { vencedor,placar } = this.jogar()
        //Setar pontuacao
        // Caso empate setar 1 ponto para as duas selecoes
        if (vencedor === null) {
            this.selecaoCasa.pontuacao++
            this.selecaoVisitante.pontuacao++
        }

        console.log(placar)

    }

    jogarMataMata() {
        let { vencedor,placar } = this.jogar()
        //Caso haja empate, a partida irá para os penâltis
        if (vencedor === null) {
            let penaltisCasa = Math.random()
            let penaltisVisitante = Math.random()

            penaltisCasa > penaltisVisitante ?
                vencedor = this.selecaoCasa :
                vencedor = this.selecaoVisitante
        }

        //Classificando vencedores para a próxima fase
        let faseIndex = fases.indexOf(vencedor.colocacao)
        vencedor.colocacao = fases[++faseIndex]
        console.log(placar)
        return vencedor
    }
}
