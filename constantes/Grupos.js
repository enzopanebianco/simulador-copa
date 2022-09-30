import { selecoes } from "./Selecoes.js"
import { Grupo } from '../Grupo.js'

const chaves = ["A", "B", "C", "D", "E", "F", "G", "H"]

const grupos = chaves.map(chave => {
    const selecoesLista = selecoes.filter(selecao => {
        if (selecao['grupo'] === chave) return selecao
    }
    )
    return new Grupo(selecoesLista, chave)
})

export { grupos }