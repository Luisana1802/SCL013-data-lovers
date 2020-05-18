//funcion para ordenar
/*sortdata : parametros son la data, el atributo con lo que se quiere ordenar , y el orden (a-z o z-a)*/
const sortData = (pokeData,sortBy,sortOrder) => {
    //el slice copia el arreglo para no alterar el arreglo original//
    let dataOrdenar = pokeData.slice();
    //sort((a, b) el a y el b son paramentros dela funcion sort 
    let orderAz = dataOrdenar.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]); //esta linea compara la propiedad del pokemon a con la misma propiedad (sortBy)
    })
    if (sortOrder === "z-a"){
        orderAz.reverse();
    }
    return orderAz;
};

//funcion para filtrar por tipo
//condition es el tipo (agua,tierra,fuego etc)
const filterData = (pokeData, condition) => {
    //filter  es una funcion que reccorre todo el arreglo y que retorna una rreglo con los elementos que cumplan con la condicion 
    const filtered = pokeData.filter(element => {
    //si el pokemon en su atributo type, incluye el valor "condition igual a tipo" , retorna true 
        return element.type.includes(condition) === true; 
    })
    return filtered;
};

//funcion para filtrar por debilidades
const filterDataDebilidades  = (pokeData, condition) => {
    
    const filtered = pokeData.filter(element => {
    return element.weaknesses.includes(condition) === true;
    })
    return filtered;
};

    export {sortData, filterData,filterDataDebilidades};