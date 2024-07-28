import { IBook } from "@/utils/type";
import styles from "@/styles/book.module.css";

export default function Book({ title, author, rank, book_image, amazon_product_url }: IBook) {
	return (
		<li className={styles.bookWrapper}>
			<div className={styles.book}>
				<div className={styles.cover}>
					<img src={book_image} alt={title} />
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
