import { ProxyState } from "../AppState.js"
import myPokemonsService from "../Services/MyPokemonsService.js"
import Pokemon from "../Models/Pokemon.js"

function _drawActivePokemon(){
  let elem = document.getElementById("active-pokedex")
  if(ProxyState.activePokemon){
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }
}

function _drawMyPokemon(){
  let pokemons = ProxyState.myPokemons
  let template = ''
  pokemons.forEach(p => template += `<li onclick="app.myPokemonsController.setActive('${p.name.charAt(0).toUpperCase()+p.name.slice(1)}')">${p.name.charAt(0).toUpperCase()+p.name.slice(1)}</li>`)
  document.getElementById('my-pokedex').innerHTML = template
}

export default class MyPokemonsController{
  constructor(){
    ProxyState.on("activePokemon", _drawActivePokemon)
    ProxyState.on("myPokemons",_drawMyPokemon)
    this.getMyPokemon();
  }
  getMyPokemon(){
    try {
      myPokemonsService.getMyPokemons();
    } catch (error) {
      console.error(error)
    }
  }
  setActive(name){
    myPokemonsService.setActive(name.toLowerCase())
  }

  addPokemon(){
    try {
      myPokemonsService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  removePokemon(){
    try {
      myPokemonsService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }


}