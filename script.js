import pokemonArray from "./data/pokemon.js";
const cardContainer = document.querySelector(".card-container")
const input = document.querySelector("#search-bar")
const types = document.querySelector(".types")


const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const makeCard = (pokemonObject) => {
    const cardHTML = `
    <div class="card">
        <img class = "card__image" src="${pokemonObject.sprite}" alt="image of ${pokemonObject.name}">
        
        <div class = "card__content">
            <h1 class = "card__heading">${capitaliseFirstLetter(pokemonObject.name)}</h1>
            <p class = "card__text">${capitaliseFirstLetter(pokemonObject.name)} (#${pokemonObject.id}) is a ${pokemonObject.types.join(" & ")} type pokemon.</p>
        </div>
    </div>`
return cardHTML
}

const populatePage = (pokeArray) => {
    cardContainer.innerHTML = pokeArray.map(pokemon => makeCard(pokemon)).join("")
}
populatePage(pokemonArray)

const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const filteredArray = pokemonArray.filter(pokemon => {
        if(pokemon.name.toLowerCase().includes(searchTerm)) {
            return true;
        } else{
            return false;
        }
    })
    populatePage(filteredArray)
}

const createTypesCheckboxes = () => {
    const array = []
    for (let index = 0; index < pokemonArray.length; index++) {
        if (pokemonArray[index].types.length >= 2) {
            array.push(pokemonArray[index].types[0].toString())
            array.push(pokemonArray[index].types[1].toString())
        } else {
            array.push(pokemonArray[index].types.toString())
        }
    }
    const typesArray = [...new Set(array)]

    for (let index = 0; index < typesArray.length; index++) {
        const typesHTML =
        `<div class="type">
        <label for="${typesArray[index]}">${capitaliseFirstLetter(typesArray[index])}</label>
        <input type="checkbox" id="${typesArray[index]}">
        </div>`  
        types.innerHTML += typesHTML
    }
}

createTypesCheckboxes()



input.addEventListener("input", handleSearch)