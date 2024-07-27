import { getGenres } from "../utils/fetcher";
import { IGenre } from "../utils/type";
import Genre from "@/components/genre";
import styles from "@/styles/home.module.css";

export default async function Home() {
	const response = await getGenres();
	const genres = response.results;
	return (
		<div>
			<h1>Newyork Times Best Sellers</h1>
			<ul className={styles.grid}>
				{genres.map((genre: IGenre, index: number) => (
					<Genre key={index} {...genre} />
				))}
			</ul>
		</div>
	);
}
