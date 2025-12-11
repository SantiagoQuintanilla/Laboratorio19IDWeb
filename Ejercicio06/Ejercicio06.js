async function obtenerPokemonAleatorio() {
    try {
        const randomID=Math.floor(Math.random()*898)+1;
        console.log("ID aleatorio generado:", randomID);
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener el Pokémon");
        }
        const pokemon = await respuesta.json();
        console.log("Pokémon obtenido:", pokemon.name);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerPokemonAleatorio();