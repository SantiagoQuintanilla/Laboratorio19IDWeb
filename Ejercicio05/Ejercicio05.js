async function listarPrimeros20() {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) {
            throw new Error("Error en la solicitud: " + res.status);
        }
    const data = await res.json();

    data.results.forEach((pokemon, index) => {
        console.log(`${index + 1}. ${pokemon.name}`);
    });

    } catch (error) {
        console.error("Error:", error.message);
    }
}

listarPrimeros20();