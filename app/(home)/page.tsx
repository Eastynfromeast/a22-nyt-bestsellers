import Link from "next/link";
import { API_URL } from "../utils/constants";
import { IGenre } from "../utils/type";

async function getGenres() {
	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function Home() {
	const response = await getGenres();
	const genres = response.results;
	return (
		<div>
			<h1>Newyork Times Best Sellers</h1>
			{genres.map((genre: IGenre, index: number) => (
				<li key={index}>
					<Link href={`/list/${genre.list_name_encoded}`}>{genre.display_name}</Link>
				</li>
			))}
		</div>
	);
}
