import { API_URL } from "@/app/utils/constants";
import { getGenreBookList } from "@/app/utils/fetcher";
import { IBook, IBookDetail } from "@/app/utils/type";
import Book from "@/components/book";

interface IParams {
	params: { id: string };
}

export default async function BookDetail({ params: { id } }: IParams) {
	const booksData: IBookDetail = await getGenreBookList(id);

	return (
		<div>
			<h1>{id} </h1>
			<ul>
				{booksData.results.books.map((book: IBook, index: number) => (
					<Book key={index} {...book} />
				))}
			</ul>
		</div>
	);
}
