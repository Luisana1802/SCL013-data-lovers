import pokeData from './data/pokemon/pokemon.js';
import {sortData} from "./data.js";
//Initial Loading of the Website
document.getElementById("dad").style.display = "";
document.getElementById("screenPokemones").style.display = "none";
//Screen Shift towards Pokemon
let capturar = () => {
    document.getElementById("dad").style.display = "none";
    document.getElementById("screenPokemones").style.display = "";
  };
  document.getElementById("btnComenzar").addEventListener("click", capturar);
const allPokemon = pokeData.pokemon;
let printInPokemonList =(pokemonOrdenado,index) => {
     // crea un nuevo div 
  // y añade contenido 
    let newDiv = document.createElement("div"); 
    newDiv.className = "cartas"; 
    //agragendo el nombre
    var para = document.createElement("h4");
    var node = document.createTextNode(pokemonOrdenado[index].name);
    para.appendChild(node);
    newDiv.appendChild(para)
    //agregando imagen
    let imagen=document.createElement("img");
    imagen.src = pokemonOrdenado[index].img;
    newDiv.appendChild(imagen);
    //agragendo el numero
    var para = document.createElement("h5");
    var node = document.createTextNode(pokemonOrdenado[index].num);
    para.appendChild(node);
    newDiv.appendChild(para)
    //agregando array tipo para poder iterar pokemones por TIPO
    var arrayType = allPokemon[index].type;
    newDiv.innerHTML += "<B>Tipo: </B>";
    for (let indexUno in arrayType) {
        var parrafoTipo = document.createElement("h6");   
        parrafoTipo.innerHTML = arrayType[indexUno];
        newDiv.appendChild(parrafoTipo);
    };
    // añade el elemento creado y su contenido al DOM 
    var cajaPokedex = document.getElementById("cajaPokedex"); 
    cajaPokedex.appendChild(newDiv);
  };
let capturarSelect = () => {
    let select = document.getElementById("selectOrdenar");
    var pokemonOrdenado;
    console.log(select.value);
    if (select.value == 1){
        pokemonOrdenado = sortData(allPokemon,"name","a-z");
    } else if (select.value == 2){
            pokemonOrdenado = sortData(allPokemon,"name","z-a");
    } else if (select.value == 3){
            pokemonOrdenado = sortData(allPokemon,"num","a-z");
    } else if (select.value == 4){
            pokemonOrdenado = sortData(allPokemon,"num","z-a");
    }
    console.log(pokemonOrdenado);
    var cajaPokedex = document.getElementById("cajaPokedex"); 
   cajaPokedex.innerHTML = '';
        for (let index in pokemonOrdenado) {
            printInPokemonList(pokemonOrdenado,index);
        }
};
document.getElementById("selectOrdenar").addEventListener("change", capturarSelect, false);
for (let index in allPokemon) {
    printInPokemonList(allPokemon,index);
}