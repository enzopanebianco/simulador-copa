import { Selecao } from "../Selecao.js"

const data =  [
    { nome: "Catar", sigla: "CAT", grupo: "A" },
    { nome: "Equador", sigla: "EQU", grupo: "A" },
    { nome: "Senegal", sigla: "SEN", grupo: "A" },
    { nome: "Holanda", sigla: "HOL", grupo: "A" },

    { nome: "Inglaterra", sigla: "ING", grupo: "B" },
    { nome: "Iran", sigla: "IRA", grupo: "B" },
    { nome: "País de Gales", sigla: "GAL", grupo: "B" },
    { nome: "Estados Unidos", sigla: "EUA", grupo: "B" },

    { nome: "Argentina", sigla: "ARG", grupo: "C" },
    { nome: "Arábia Saudita", sigla: "ARS", grupo: "C" },
    { nome: "México", sigla: "MEX", grupo: "C" },
    { nome: "Polônia", sigla: "POL", grupo: "C" },

    { nome: "Dinamarca", sigla: "DIN", grupo: "D" },
    { nome: "França", sigla: "FRA", grupo: "D" },
    { nome: "Tunisia", sigla: "TUN", grupo: "D" },
    { nome: "Australia", sigla: "AUS", grupo: "D" },

    { nome: "Espanha", sigla: "ESP", grupo: "E" },
    { nome: "Alemanha", sigla: "ALE", grupo: "E" },
    { nome: "Costa Rica", sigla: "CRC", grupo: "E" },
    { nome: "Japão", sigla: "JAP", grupo: "E" },

    { nome: "Bélgica", sigla: "BEL", grupo: "F" },
    { nome: "Croácia", sigla: "CRO", grupo: "F" },
    { nome: "Marrocos", sigla: "MAR", grupo: "F" },
    { nome: "Canadá", sigla: "CAN", grupo: "F" },

    { nome: "Brasil", sigla: "BRA", grupo: "G" },
    { nome: "Suiça", sigla: "SUI", grupo: "G" },
    { nome: "Servia", sigla: "SER", grupo: "G" },
    { nome: "Camarões", sigla: "CAM", grupo: "G" },

    { nome: "Portugal", sigla: "POR", grupo: "H" },
    { nome: "Uruguai", sigla: "URU", grupo: "H" },
    { nome: "Coréia do Sul", sigla: "KOR", grupo: "H" },
    { nome: "Gana", sigla: "GAN", grupo: "H" }
]

const selecoes = data.map(selecao=>new Selecao(selecao.nome,selecao.sigla,selecao.grupo))

export {
    selecoes
}