import { getGenres } from "../../utils/fetcher";
import { IGenre } from "../../utils/type";
import Genre from "@/components/genre";
import { pressStart2p } from "@/utils/font";
import styles from "@/styles/home.module.css";

export default async function Home() {
	const response = await getGenres();
	const genres = response.results;
	return (
		<div className={styles.container}>
			<h1 className={pressStart2p.className}>Newyork Times Best Sellers</h1>
			<ul className={styles.grid}>
				{genres.map((genre: IGenre, index: number) => (
					<Genre animationDelay={`${index * 0.2}s`} key={index} {...genre} />
				))}
			</ul>
		</div>
	);
}
