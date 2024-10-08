interface TechnicalRequirements {
  frontEnd: string[]
  backEnd: string[]
  desirable: string[]
  bonus: string[]
  fullStack: string
}

export const pageTitle: string = "Teste - Brain Agriculture"

export const testObjective: string = `O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

O mesmo consiste em um cadastro de produtor rural com os seguintes dados:`

export const producerFields: string[] = [
  "CPF ou CNPJ",
  "Nome do produtor",
  "Nome da Fazenda",
  "Cidade",
  "Estado",
  "Área total em hectares da fazenda",
  "Área agricultável em hectares",
  "Área de vegetação em hectares",
  "Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açucar)",
]

export const businessRequirementsTitle: string = "Requisitos de negócio"

export const businessRequirements: string[] = [
  "O usuário deverá ter a possibilidade de cadastrar, editar, e excluir produtores rurais.",
  "O sistema deverá validar CPF e CNPJ digitados incorretamente.",
  "A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda",
  "Cada produtor pode plantar mais de uma cultura em sua Fazenda.",
  "A plataforma deverá ter um Dashboard que exiba:",
  "  - Total de fazendas em quantidade",
  "  - Total de fazendas em hectares (área total)",
  "  - Gráfico de pizza por estado.",
  "  - Gráfico de pizza por cultura.",
  "  - Gráfico de pizza por uso de solo (Área agricultável e vegetação)",
]

export const technicalRequirementsTitle: string = "Requisitos técnicos"

export const technicalRequirements: TechnicalRequirements = {
  frontEnd: [
    "ReactJS",
    "Redux para controlar o estado da aplicação.",
    "Caso entenda que faça sentido, utilize Context API como recurso adicional ou substituto ao Redux (Opcional)",
    "Crie pelo menos um teste unitário por componente (Opcional)",
    "A criação das estruturas de dados 'mockados' faz parte da avaliação.",
  ],
  backEnd: [
    "Salvar os dados em um banco de dados Postgres usando o NodeJS como layer de Backend, e entregar os endpoints para cadastrar, editar, e excluir produtores rurais, além do endpoint que retorne os totais para o dashboard.",
    "A criação das estruturas de dados 'mockados' faz parte da avaliação.",
  ],
  desirable: [
    "TypeScript",
    "Conceitos como SOLID, KISS, Clean Code, API Contracts, Tests, Layered Architecture",
  ],
  bonus: [
    "Aplicação disponibilizada em algum cloud provider de sua preferência",
  ],
  fullStack: `O desenvolvedor full-stack deve realizar ambos, e concluir a integração.
  Não envie a solução como anexo, suba os fontes para seu Github (ou outro repositório) e envie o link para o avaliador.`,
}
