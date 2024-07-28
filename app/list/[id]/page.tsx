import { getGenreBookList } from "@/utils/fetcher";
import { IBook, IBookDetail } from "@/utils/type";
import Book from "@/components/book";
import PageTitle from "@/components/pageTitle";
import styles from "@/styles/list.module.css";

interface IParams {
	params: { id: string };
}

export default async function BookDetail({ params: { id } }: IParams) {
	const booksData: IBookDetail = await getGenreBookList(id);

	return (
		<div className={styles.container}>
			<PageTitle title={booksData === null ? id : booksData.results.list_name} />
			<ul>
				{booksData.results.books.map((book: IBook, index: number) => (
					<Book key={index} {...book} />
				))}
			</ul>
		</div>
	);
}
