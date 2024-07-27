interface IParams {
	params: { id: string };
}

export default function BookDetail({ params: { id } }: IParams) {
	return <h1>Book Detail Page {id} </h1>;
}
