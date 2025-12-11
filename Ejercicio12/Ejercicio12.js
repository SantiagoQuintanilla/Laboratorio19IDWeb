let pokemonList = []; 
let currentIndex = 0; 

async function loadPokemons() {
    for (let id = 1; id <= 12; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        pokemonList.push(data);
    }

    showPokemons();
}

function showPokemons() {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";

    const slice = pokemonList.slice(currentIndex, currentIndex + 3);

    slice.forEach(poke => {
        container.innerHTML += `
            <div class="card">
                <img src="${poke.sprites.front_default}" alt="${poke.name}">
                <h3>${poke.name.toUpperCase()}</h3>
                <p>ID: ${poke.id}</p>
            </div>
        `;
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex + 3 < pokemonList.length) {
        currentIndex += 3;
        showPokemons();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex - 3 >= 0) {
        currentIndex -= 3;
        showPokemons();
    }
});

loadPokemons();