import ApiPokemonsController from "./Controllers/ApiPokemonsController.js";
//import MyPokemonsController from "./Controllers/MyPokemonsController.js";

class App {
  apiPokemonsController = new ApiPokemonsController();
  //myPokemonsController = new MyPokemonsController();
}

window["app"] = new App();
