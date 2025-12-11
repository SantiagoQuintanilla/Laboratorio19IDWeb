async function cargarPokemones() {
  const contenedor = document.getElementById("contenedor");
  const listaPokemones = []; 

  for (let i = 1; i <= 10; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    listaPokemones.push(data); 
  }

  listaPokemones.forEach(poke => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${poke.sprites.front_default}" alt="${poke.name}">
      <h3>${poke.name.toUpperCase()}</h3>
      <p>ID: ${poke.id}</p>
    `;

    contenedor.appendChild(card);
  });
}

cargarPokemones();