
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


        export {sortData};