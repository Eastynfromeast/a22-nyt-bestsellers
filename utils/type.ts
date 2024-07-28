export interface IGenre {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
}

export interface IGenreProps extends IGenre {
	animationDelay: string;
}

export interface IGetGenre {
	status: string;
	copyright: string;
	num_results: number;
	results: IGenre[];
}

export interface IBook {
	rank: number;
	rank_last_week: number;
	weeks_on_list: number;
	publisher: string;
	description: string;
	price: string;
	title: string;
	author: string;
	book_image: string;
	book_image_width: number;
	book_image_height: number;
	amazon_product_url: string;
	age_group: string;
	book_review_link: string;
	first_chapter_link: string;
	sunday_review_link: string;
	article_chapter_link: string;
	book_uri: string;
}

export interface IBookProps extends IBook {
	animationDelay: string;
}

export interface IBookDetail {
	status: string;
	copyright: string;
	num_results: number;
	last_modified: string;
	results: {
		list_name: string;
		list_name_encoded: string;
		bestsellers_date: string;
		published_date: string;
		published_date_description: string;
		next_published_date: string;
		previous_published_date: string;
		display_name: string;
		normal_list_ends_at: number;
		updated: string;
		books: IBook[];
	};
}
