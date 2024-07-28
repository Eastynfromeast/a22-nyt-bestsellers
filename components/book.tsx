import { IBookProps } from "@/utils/type";
import styles from "@/styles/book.module.css";

export default function Book({ title, author, rank, book_image, amazon_product_url, animationDelay }: IBookProps) {
	return (
		<li className={styles.bookWrapper} style={{ animationDelay }}>
			<div className={styles.book}>
				<div className={styles.cover}>
					<img src={book_image} alt={title} />
					<span className={styles.rank}>{rank}</span>
				</div>
				<h3>{title}</h3>
				<p>{`by. ${author}`}</p>
				<a className={styles.buyBtn} href={amazon_product_url} target={"_blank"}>
					purchase
				</a>
			</div>
		</li>
	);
}
