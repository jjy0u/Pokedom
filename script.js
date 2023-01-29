import pokemonArray from "./data/pokemon.js";
const cardContainer = document.querySelector(".card-container")

const capitaliseFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const makeCard = (pokemonObject) => {
    const cardHTML = `
    <div class="card">
        <img class = "card__image" src="${pokemonObject.sprite}" alt="image of ${pokemonObject.name}">
        
        <div class = "card__content">
            <h1 class = "card__heading">${capitaliseFirstLetter(pokemonObject.name)}</h1>
            <p class = "card__text">${capitaliseFirstLetter(pokemonObject.name)} (#${pokemonObject.id}) is a ${pokemonObject.types.join("&")} type pokemon.</p>
        </div>
    </div>`
return cardHTML
}

const populatePage = (pokeArray) => {
    cardContainer.innerHTML = pokeArray.map(pokemon => makeCard(pokemon)).join("")
}
populatePage(pokemonArray)
