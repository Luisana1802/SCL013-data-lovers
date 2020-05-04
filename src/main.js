import pokeData from './data/pokemon/pokemon.js';


//aqui se crea cajaPokedex donde se insertará las caracteristicas de los poke
var cajaPokedex = document.querySelector("#root");
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

//
for (let index in pokeData.pokemon) {
       
    printInPokemonList(index);
    
    arrayName.push(pokeData.pokemon[index].name);

};

console.log(arrayName);

arrayName.sort();

console.log(arrayName);

arrayName.reverse();

//console.log(arrayName);

//creating an array without parameters to insert it into the next for
var arrayNum = [];

//

for (let index in pokeData.pokemon) {
           
    arrayNum.push(pokeData.pokemon[index].num);

};

//ordering pokemon from 151 to 1
arrayNum.sort();
console.log(arrayNum);
arrayNum.reverse();
console.log (arrayNum);


//adding the dynamic select of the order
function agregarSelect() {
    var select = '<select id="ordenar" ><option value="uno">Ordenar por</option><option value="dos">De la A a la Z</option><option value="tres">De la Z a la A</option><option value="cuatro">Del 1 al 151</option><option value="cinco">Del 151 al 1</option></select>';
    document.getElementById('selectOrdenar').innerHTML = select;
  }
  agregarSelect();


 
