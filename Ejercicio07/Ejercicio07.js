async function buscarPokemon() {
  const id = document.getElementById("inputID").value;

  if (!id || id < 1 || id > 898) {
    alert("Por favor ingresa un ID válido entre 1 y 898");
    return;
  }

  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!respuesta.ok) throw new Error("No se pudo obtener el Pokémon");
    
    const pokemon = await respuesta.json();
    document.getElementById("card").style.display = "block";

    document.getElementById("pokeImg").src = pokemon.sprites.front_default;
    document.getElementById("pokeName").textContent = pokemon.name.toUpperCase();
    document.getElementById("pokeID").textContent = `ID: ${pokemon.id}`;
    document.getElementById("pokeAltura").textContent = `Altura: ${pokemon.height}`;
    document.getElementById("pokePeso").textContent = `Peso: ${pokemon.weight}`;

    const habilidades = pokemon.abilities
      .map(h => h.ability.name)
      .join(", ");

    document.getElementById("pokeHabilidades").textContent =
      `Habilidades: ${habilidades}`;

  } catch (error) {
    console.error(error);
    alert("Error: no se pudo obtener el Pokémon.");
  }
}