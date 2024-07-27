import { IBook } from "@/app/utils/type";

export default function Book({ title, rank, book_image, amazon_product_url }: IBook) {
	return <li>{title}</li>;
}
