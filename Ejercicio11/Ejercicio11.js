async function buscarPokemon() {
    const entrada = document.getElementById("inputPokemon").value.trim().toLowerCase();

    if (!entrada) {
        alert("Ingresa un nombre o ID de Pokémon");
        return;
    }
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${entrada}`);
        if (!res.ok) throw new Error("Pokémon no encontrado");

        const data = await res.json();

        document.getElementById("card").style.display = "block";

        document.getElementById("pokeImg").src = data.sprites.front_default;
        document.getElementById("pokeName").textContent = data.name.toUpperCase();

        const statsBody = document.getElementById("statsBody");
        statsBody.innerHTML = ""; 

        data.stats.forEach(stat => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${stat.stat.name}</td>
                <td>${stat.base_stat}</td>
            `;

            statsBody.appendChild(fila);
        });

    } catch (error) {
        console.error(error);
        alert("El Pokémon no existe. Intenta nuevamente.");
    }
}