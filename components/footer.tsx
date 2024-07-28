import { getGenres } from "@/utils/fetcher";
import styles from "@/styles/footer.module.css";
export default async function Footer() {
	const response = await getGenres();

	return (
		<footer className={styles.footerContainer}>
			<div className={styles.footerWrapper}>
				<p className={styles.author}>created by Nulnu</p>
				<p className={styles.copyright}>{response !== null ? response.copyright : "Copyright text will be here"}</p>
			</div>
		</footer>
	);
}
