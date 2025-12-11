fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => res.json())
  .then(data => {
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
  })
  .catch(err => console.error("Error:", err));