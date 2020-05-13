import pokeData from './data/pokemon/pokemon.js';
import {sortData,filterData,filterDataDebilidades} from "./data.js";
//Initial Loading of the Website
document.getElementById("dad").style.display = "";
document.getElementById("screenPokemones").style.display = "none";
//Screen Shift towards Pokemon
let capturar = () => {
    document.getElementById("dad").style.display = "none";
    document.getElementById("screenPokemones").style.display = "";
};
document.getElementById("btnComenzar").addEventListener("click", capturar);
//Retorna con boton Inicio
let volverPrincipio = () => {
    document.getElementById("dad").style.display = "";
    document.getElementById("screenPokemones").style.display = "none";
};
document.getElementById("inicio").addEventListener("click", volverPrincipio, false);
//Retorna con boton POKEDEX
let irPokedex = () => {
    document.getElementById("dad").style.display = "none";
    document.getElementById("screenPokemones").style.display = "";
};
document.getElementById("pokedex").addEventListener("click", irPokedex, false);
const allPokemon = pokeData.pokemon;
var pokemonOrdenado;
let printInPokemonList =(pokemonOrdenado,index) => {
    // crea un nuevo div
    // y añade contenido
    let newDiv = document.createElement("div");
    newDiv.className = "cartas";
    //agragendo el nombre
    var para1 = document.createElement("h4");
    var node1 = document.createTextNode(pokemonOrdenado[index].name);
    para1.appendChild(node1);
    newDiv.appendChild(para1)
    //agregando imagen
    let imagen=document.createElement("img");
    imagen.src = pokemonOrdenado[index].img;
    imagen.className = "pokeImagenes";
    newDiv.appendChild(imagen);
    //agragendo el numero
    var para = document.createElement("h5");
    var node = document.createTextNode(pokemonOrdenado[index].num);
    para.appendChild(node);
    newDiv.appendChild(para)
    //agregando array tipo para poder iterar pokemones por TIPO
    var arrayType = pokemonOrdenado[index].type;
    newDiv.innerHTML += "<B>Tipo: </B>";
    for (let indexUno in arrayType) {
        var parrafoTipo = document.createElement("h6");
        parrafoTipo.innerHTML = arrayType[indexUno];
        newDiv.appendChild(parrafoTipo);
    }
    // añade el elemento creado y su contenido al DOM
    var cajaPokedex = document.getElementById("cajaPokedex");
    cajaPokedex.appendChild(newDiv);
    createModal();
};
//ordenar pokemones
let capturarSelect = () => {
    let select = document.getElementById("selectOrdenar");
    //var pokemonOrdenado;
    console.log(select.value);
    var pokemonUse = [];
    if (pokemonOrdenado.length > 0){
        pokemonUse = pokemonOrdenado
    } else {
        pokemonUse = allPokemon
    }
    if (select.value == 1){
        pokemonOrdenado = sortData(pokemonUse,"name","a-z");
    } else if (select.value == 2){
        pokemonOrdenado = sortData(pokemonUse,"name","z-a");
    } else if (select.value == 3){
        pokemonOrdenado = sortData(pokemonUse,"num","a-z");
    } else if (select.value == 4){
        pokemonOrdenado = sortData(pokemonUse,"num","z-a");
    }
    console.log(pokemonOrdenado);
    var cajaPokedex = document.getElementById("cajaPokedex");
    cajaPokedex.innerHTML = '';
    for (let index in pokemonOrdenado) {
        printInPokemonList(pokemonOrdenado,index);
    }
};
//filtrar por tipo
let capturarSelectFiltrar = () => {
    let select = document.getElementById("selectFiltrar");
    //var pokemonOrdenado;
    console.log(select.value);
    if(select.value == "todos"){
        pokemonOrdenado = allPokemon;
    } else {
        pokemonOrdenado = filterData(allPokemon,select.value);
    }
    console.log(pokemonOrdenado);
    var cajaPokedex = document.getElementById("cajaPokedex");
    cajaPokedex.innerHTML = '';
    for (let index in pokemonOrdenado) {
        printInPokemonList(pokemonOrdenado,index);
    }
};
//filtrar por debilidad
let capturarSelectFiltrarDebilidades = () => {
    let select = document.getElementById("selectFiltrarDebilidades");
    //var pokemonOrdenado;
    console.log(select.value);
    if(select.value == "todosDebilidades"){
        pokemonOrdenado = allPokemon;
    } else {
        pokemonOrdenado = filterDataDebilidades(allPokemon,select.value);
    }
    console.log(pokemonOrdenado);
    var cajaPokedex = document.getElementById("cajaPokedex");
    cajaPokedex.innerHTML = '';
    for (let index in pokemonOrdenado) {
        printInPokemonList(pokemonOrdenado,index);
    }
};
document.getElementById("selectOrdenar").addEventListener("change", capturarSelect, false);
document.getElementById("selectFiltrar").addEventListener("change", capturarSelectFiltrar, false);
document.getElementById("selectFiltrarDebilidades").addEventListener("change", capturarSelectFiltrarDebilidades, false);
let inicioPokedex = () => {
    for (let index in allPokemon) {
        pokemonOrdenado = allPokemon;
        printInPokemonList(allPokemon,index);
        console.log("pokemon for");
    }
}
document.getElementById("btnComenzar").addEventListener("click", inicioPokedex, false);
//creating the modal
function createModal (){
    let modal = document.getElementById("modal");
    let contentModal = document.getElementById("contentModal");
    let imagenButon = document.getElementsByClassName ("pokeImagenes");
    modal.style.display = "none";
    for (let i=0; i< imagenButon.length; i++){
        let imagen = imagenButon[i];
        imagen.addEventListener('click', () => {
            console.log("hiciste click");
            modal.style.display = "block";
            contentModal.innerHTML = `  <div class="allDiv">
            <div class="imgName"></div>
            <h4>${pokemonOrdenado[i].name}</h4>
            <img src="${pokemonOrdenado[i].img}" alt="" class="pokeImagenes">
            <p>${pokemonOrdenado[i].num}<p>
            </div>
            <div class = "allInformation">
            <p>Height: ${pokemonOrdenado[i].height}<p>
            <p>Weight: ${pokemonOrdenado[i].weight}<p>
            <p>Candy Count: ${pokemonOrdenado[i].candy_count}<p>
            <p>Egg: ${pokemonOrdenado[i].egg}<p>
            <p>Weaknesses:  ${pokemonOrdenado[i].weaknesses}<p>
            </div>
            </div>
            `
            ;
        })
    }};
    window.onclick = function(event) {
        if (event.target== modal){
            modal.style.display = "none";
            contentModal.innerHTML = "";
        }
    };