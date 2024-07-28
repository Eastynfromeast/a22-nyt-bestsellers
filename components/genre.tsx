import Link from "next/link";
import { IGenreProps } from "@/utils/type";
import styles from "@/styles/genre.module.css";

export default function Genre({ display_name, list_name_encoded, animationDelay }: IGenreProps) {
	return (
		<li className={styles.genre} style={{ animationDelay }}>
			<Link href={`/list/${list_name_encoded}`}>{display_name}</Link>
		</li>
	);
}
