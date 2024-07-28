import { API_URL } from "./constants";

export async function getGenres() {
	const response = await fetch(`${API_URL}/lists`);
	const json = await response.json();
	return json;
}

export async function getGenreBookList(name: string) {
	const response = await fetch(`${API_URL}/list?name=${name}`);
	const json = await response.json();
	return json;
}
