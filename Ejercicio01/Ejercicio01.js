const id=prompt("Ingresa el ID del Pokémon:");

async function obtenerPokemonPorID(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
        throw new Error("Pokémon no encontrado");
    }
        const data = await res.json();
        console.log("Nombre:", data.name);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerPokemonPorID(id);