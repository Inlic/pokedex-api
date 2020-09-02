import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class ApiPokemonsService {
  async getAllApiPokemons(){
    let res = await pokeApi.get('?limit=150/')
    ProxyState.apiPokemons = res.data.results
  }
}

const apiSpellsService = new ApiPokemonsService()
export default apiSpellsService