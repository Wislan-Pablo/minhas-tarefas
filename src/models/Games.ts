class Game {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
  capa: string

  constructor(
    id: number,
    titulo: string,
    plataformas: string[],
    precoAntigo: number,
    preco: number,
    categoria: string,
    imagem: string,
    capa: string
  ) {
    this.id = id
    this.titulo = titulo
    this.plataformas = plataformas
    this.precoAntigo = precoAntigo
    this.preco = preco
    this.categoria = categoria
    this.imagem = imagem
    this.capa = capa
  }
}

export default Game
