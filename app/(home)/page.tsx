import { getGenres } from "../utils/fetcher";
import { IGenre } from "../utils/type";
import Genre from "@/components/genre";

export default async function Home() {
	const response = await getGenres();
	const genres = response.results;
	return (
		<div>
			<h1>Newyork Times Best Sellers</h1>
			{genres.map((genre: IGenre, index: number) => (
				<Genre key={index} {...genre} />
			))}
		</div>
	);
}
