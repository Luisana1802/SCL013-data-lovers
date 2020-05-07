import pokeData from './data/pokemon/pokemon.js';

import {orderNum, orderNumReverse,orderName,orderNameReverse} from "./data.js";





//aqui se crea cajaPokedex donde se insertará las caracteristicas de los poke
var cajaPokedex = document.querySelector("#listPokedex");
cajaPokedex.innerHTML = "";



let printInPokemonList =(index) => {
    
    //creandoo div para que todas las iteraciones del for se queden agrupadas aqui
    var divUno = document.createElement("div");
    divUno.className = "cartas";

    //agregando imagen
    var imagem=document.createElement("img");
    imagem.src = pokeData.pokemon[index].img;
    divUno.appendChild(imagem);
    cajaPokedex.appendChild(divUno);

    //agragendo el numero
    var numero = document.createElement("number");
    var number = document.createTextNode(pokeData.pokemon[index].num);
    divUno.appendChild(number);
    cajaPokedex.appendChild(divUno);

    //agragendo el nombre
    var nombre = document.createElement("p");
    var texto = document.createTextNode(pokeData.pokemon[index].name);
    nombre.appendChild(texto);
    divUno.appendChild(nombre);
                    

    //agregando array tipo para poder iterar
    var arrayType = pokeData.pokemon[index].type;

    //var divuno pot tipo = document.createElement("div");
    divUno.innerHTML += "<B>Tipo: </B>";
    for (let indexUno in arrayType) {
        var parrafoTipo = document.createElement("p");   
        parrafoTipo.innerHTML = arrayType[indexUno];
        divUno.appendChild(parrafoTipo);
    };
};

//creating an array without parameters to insert it into the next for
var arrayName = [];
for (let index in pokeData.pokemon) {
    printInPokemonList(index);
    arrayName.push(pokeData.pokemon[index].name);
};

//console.log("1",arrayName);



//creating an array without parameters to insert it into the next for
var arrayNum = [];
for (let index in pokeData.pokemon) {
    arrayNum.push(pokeData.pokemon[index].num);
};

let capturarSelect =() => {
    let valueSelect = document.getElementById("selectOrdenar");
    let value = valueSelect[valueSelect.selectedIndex].value;
    
    console.log(value);
    if (value=="1") {
        let nameAZ = orderName(arrayName);
        //console.log(nameAZ);
    } else if (value=="2") {
        let nameZA = orderNameReverse(arrayName);
        //console.log(nameZA);
    } else if (value=="3") {
        let numOrdenado = orderNum(arrayNum);
        //console.log(numOrdenado)
    } else if (value=="4") {
        let umReverse =orderNumReverse(arrayNum);
        //console.log(umReverse)
        
    }
    
};
    
document.getElementById("selectOrdenar").addEventListener("change", capturarSelect, false);



//...........................................................................
