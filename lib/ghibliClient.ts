const BASE_URL = process.env.GHIBLI_API_URL;

export async function getAllFilms() {
  const response = await fetch(`${BASE_URL}/films`);
  if (!response.ok) throw new Error("Error al obtener las películas");
  return response.json();
}

export async function getFilmById(id: string) {
  const response = await fetch(`${BASE_URL}/films/${id}`);
  if (!response.ok) throw new Error("Película no encontrada");
  return response.json();
}