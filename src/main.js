
import pokeData from './data/pokemon/pokemon.js';


//console.log(pokeData.pokemon [115])

const select = document.getElementById ("ordenarPokedex")

//select.option[select.selectedIndex].tex

select.addEventListener("change", () => {
    let condition = select.option[select.selectedIndex].tex
})