import { ProxyState } from "../AppState.js";
import apiPokemonsService from "../Services/ApiPokemonsService.js"

function _drawApiPokemons(){
  let pokemons = ProxyState.apiPokemons
  let template = ''
  pokemons.forEach(p => template +=`<li onclick="app.apiPokemonsController.setActive('${p.name.charAt(0).toUpperCase()+p.name.slice(1)}')">${p.name.charAt(0).toUpperCase()+p.name.slice(1)}</li>`)
  document.getElementById('api-pokedex').innerHTML = template
}

export default class ApiPokemonsController{
  constructor(){
    ProxyState.on('apiPokemons',_drawApiPokemons)
    //NOTE function below to check what we got from the api so we can utilize it
  this.getAllApiPokemons()
  }

  getAllApiPokemons(){
    try {
      apiPokemonsService.getAllApiPokemons()
    } catch (error) {
      console.error(error)
    }
  }

  setActive(name){
  try {
    apiPokemonsService.setActive(name.toLowerCase())
  } catch (error) {
    console.error(error)
  }
  }

}