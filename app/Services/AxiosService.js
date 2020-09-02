export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})

export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/ben/pokemon/"
})