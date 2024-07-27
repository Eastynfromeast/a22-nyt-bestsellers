import { IGenre } from "@/app/utils/type";
import Link from "next/link";

export default function Genre({ display_name, list_name_encoded }: IGenre) {
	return (
		<li>
			<Link href={`/list/${list_name_encoded}`}>{display_name}</Link>
		</li>
	);
}
