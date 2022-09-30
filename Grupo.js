import { Partida } from "./Partida.js"

export class Grupo {
    constructor(selecoes, chave) {
        if (selecoes.length !== 4) {
            throw new Error("Grupo deve conter exatamente 4 seleções")
        }
        this.selecoes = selecoes
        this.chave = chave

    }

    getGrupo() {
        return this.selecoes.sort((a, b) => {
            if (a.pontuacao === b.pontuacao) return b.saldo - a.saldo
            return b.pontuacao - a.pontuacao

        })
    }
    //Setando posicao do grupo com "A1", "B2". Para definir chaves das oitavas
    setPosicaoGrupo() {
        return this.getGrupo().map((selecao, index) => {
            selecao.posicaoGrupo = selecao.grupo + `${index + 1}`
            index > 1 ?
                selecao.colocacao = 'Fase de Grupos' :
                selecao.colocacao = 'Oitavas'
            return selecao
        })
    }

    simularGrupo() {
        let jogos = []
        let j = 3
        for (let i = 0; i < 3; i++) {
            jogos.push({ casa: this.selecoes[3], visitante: this.selecoes[j - 1] })
            if (i == 2) jogos.push({ casa: this.selecoes[2], visitante: this.selecoes[1] })
            else jogos.push({ casa: this.selecoes[0], visitante: this.selecoes[i + 1] })
            j -= 1
        }

        jogos.forEach(jogo => {
            const partida = new Partida(jogo.casa, jogo.visitante)
            partida.jogarFaseDeGrupos()
        })
        this.setPosicaoGrupo()
        return this.getGrupo().slice(0, 2)
    }
}
