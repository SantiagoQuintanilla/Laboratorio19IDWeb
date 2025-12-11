async function obtenerSpriteCharizard() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    if (!res.ok) {
        throw new Error("Error en la solicitud: " + res.status);
    }
        const data = await res.json();
        console.log("Sprite frontal:", data.sprites.front_default);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerSpriteCharizard();