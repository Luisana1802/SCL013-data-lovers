//funcion para ordenar
const sortData = (pokeData,sortBy,sortOrder) => {
  let dataOrdenar = pokeData.slice();
  let orderAz = dataOrdenar.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]); //esta linea compara la propiedad del pokemon a con la misma propiedad (sortBy)
  })
  if (sortOrder === "z-a"){
      orderAz.reverse();
  }
  return orderAz;
};
//funcion para filtrar por tipo
const filterData = (pokeData, condition) => {
  const filtered = pokeData.filter(element => {
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
