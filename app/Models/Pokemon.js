export default class Pokemon{
  constructor({ _id = "", name, types, sprites, img , weight, height}){
    this.id = _id
    this.name = name
    this.types = types
    //NOTE default image vs img from one api vs image from other api
    this.img = img || (sprites.front_default || "https://pokemon-overdose.com/wp-content/uploads/132-640x640.png")
    this.weight = weight
    this.height = height
  }

  get Template() {
    return `
    <div class="card-body">
      <img class="bg-white card-img-top mb-2" src="${this.img}">
      <h4 class="card-title">${this.name.charAt(0).toUpperCase()+this.name.slice(1)}</h4>
      <p class="card-text">Types: ${this.Types} </p>
      <p class="card-text">weight: ${this.weight}</p>
      <p class="card-text">height: ${this.height}</p>
      ${this.Button}
    </div>
    `
  }


  // NOTE drilling into our object list
  get Types(){
    let template = '| ' 
    this.types.forEach(elem => {
      template+= elem.type.name+' | '
    });
    return template
  }

  get Button() {
    if (this.id) {
      return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Remove</button>`
    }
    return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-primary">Add Pokemon</button>`
  }
}
