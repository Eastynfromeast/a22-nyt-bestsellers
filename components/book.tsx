import { IBook } from "@/app/utils/type";

export default function Book({ title, rank, book_image, amazon_product_url }: IBook) {
	return (
		<li>
			<img src={book_image} alt={title} />
			{title}
			<a href={amazon_product_url} target={"_blank"}>
				purchase
			</a>
		</li>
	);
}
