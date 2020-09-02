import { ProxyState } from "../AppState.js";
import apiPokemonsService from "../Services/ApiPokemonsService.js"

function _drawApiPokemons(){
  let pokemons = ProxyState.apiPokemons
  let template = ''
  pokemons.forEach(p => template +=`<li onclick="app.apiPokemonsController.getDetails('${p.name}')>${p.name}</li>`)
  document.getElementById('api-pokedex').innerHTML = template
}

export default class ApiPokemonsController{
  constructor(){
    ProxyState.on('apiPokemons',_drawApiPokemons)
  this.getAllApiPokemons()
  }

  getAllApiPokemons(){
    try {
      apiPokemonsService.getAllApiPokemons()
    } catch (error) {
      console.error(error)
    }
  }


}