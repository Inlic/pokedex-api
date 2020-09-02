export default class Pokemon{
  constructor({ _id = "", name, types, img = "https://pokemon-overdose.com/wp-content/uploads/132-640x640.png", weight, height}){
    this.id = _id
    this.name = name
    this.types = types
    this.img = img
    this.weight = weight
    this.height = height
  }

  get Template() {
    return `
    <div class="card-body">
      <img class="card-img-top" src="${this.img}">
      <h4 class="card-title">${this.name.charAt(0).toUpperCase()+this.name.slice(1)}</h4>
      <p class="card-text">Types: ${this.types}</p>
      <p class="card-text">weight: ${this.weight}</p>
      <p class="card-text">height: ${this.height}</p>
      ${this.Button}
    </div>
    `
  }
  get Button() {
    if (this.id) {
      return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Remove</button>`
    }
    return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-success">Add Pokemon</button>`
  }
}
