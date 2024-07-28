import { getGenres } from "../../utils/fetcher";
import { IGenre } from "../../utils/type";
import Genre from "@/components/genre";
import styles from "@/styles/home.module.css";
import PageTitle from "@/components/pageTitle";
import { ThemeProvider } from "next-themes";

export const metadata = {
	title: "Home",
};

export default async function Home() {
	const response = await getGenres();
	const genres = response.results;
	return (
		<>
			<div className={styles.container}>
				<PageTitle title="Newyork Times Best Sellers" />
				<ul className={styles.grid}>
					{genres.map((genre: IGenre, index: number) => (
						<Genre animationDelay={`${index * 0.2}s`} key={index} {...genre} />
					))}
				</ul>
			</div>
		</>
	);
}
