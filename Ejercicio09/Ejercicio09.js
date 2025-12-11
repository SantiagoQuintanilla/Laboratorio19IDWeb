async function buscarPokemon() {
    const entrada = document.getElementById("inputPokemon").value.trim().toLowerCase();

    if (!entrada) {
        alert("Por favor ingresa un nombre o ID.");
        return;
    }
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${entrada}`);
        if (!res.ok) throw new Error("Pokémon no encontrado");

        const data = await res.json();

        document.getElementById("card").style.display = "block";

        document.getElementById("pokeImg").src = data.sprites.front_default;
        document.getElementById("pokeName").textContent = data.name.toUpperCase();

        const tipos = data.types.map(t => t.type.name);

        document.getElementById("pokeTipos").textContent =
            "Tipos: " + tipos.join(", ");

    } catch (error) {
        console.error(error);
        alert("No se encontró el Pokémon.");
    }
}