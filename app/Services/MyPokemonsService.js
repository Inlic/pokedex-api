import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonsService {
  setActive(name){
    ProxyState.activePokemon = ProxyState.myPokemons.find(p => p.name == name)
  }

  async getMyPokemons(){
    let res = await sandboxApi.get('')
    ProxyState.myPokemons = res.data.data.map(p => new Pokemon(p))
  }

  async addPokemon(){
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data.data)]
  }

  async removePokemon(){
    await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }

}

const myPokemonsService = new MyPokemonsService()
export default myPokemonsService