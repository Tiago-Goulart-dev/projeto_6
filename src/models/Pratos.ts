class Pratos {
  title: string
  description: string
  image: string
  id: number

  constructor(title: string, description: string, image: string, id: number) {
    this.title = title
    this.image = image
    this.description = description
    this.id = id
  }
}

export default Pratos
