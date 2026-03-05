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
export async function getAllPeople() {
  const response = await fetch(`${BASE_URL}/people`);
  if (!response.ok) throw new Error("Error al obtener personajes");
  return response.json();
}
export async function getPeopleById(id: string) {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) throw new Error("Personaje no encontrado");
  return response.json();
}