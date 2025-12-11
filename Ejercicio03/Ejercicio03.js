async function obtenerPikachu() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!res.ok) {
      throw new Error("Error en la solicitud: " + res.status);
    }
    const data = await res.json();
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

obtenerPikachu();