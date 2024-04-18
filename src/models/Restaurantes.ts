class Restaurantes {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
  id: number
  caminho: string

  constructor(
    title: string,
    description: string,
    infos: string[],
    nota: string,
    image: string,
    id: number,
    caminho: string
  ) {
    this.title = title
    this.image = image
    this.description = description
    this.infos = infos
    this.nota = nota
    this.id = id
    this.caminho = caminho
  }
}

export default Restaurantes
