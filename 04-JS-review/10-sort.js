const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

function getTotalReviewCount(book) {
	const goodread = book.reviews.goodreads.reviewsCount;
	const librarything = book.reviews.librarything?.reviewsCount ?? 0;

	return goodread + librarything;
}

const books = getBooks();

const totalPages = books.reduce((acum, book) => acum + book.pages, 0);
totalPages;

// 1️⃣ clasificar, ordenar
/*
El método sort() en JavaScript sirve para ordenar los elementos de un arreglo.
Lo importante es que ordena directamente el arreglo original (lo modifica) y devuelve ese mismo arreglo.

Por defecto, los convierte a texto y los ordena alfabéticamente, por eso con números suele dar resultados raros. Para ordenar numéricamente, necesitamos darle una función de comparación.

⚙️ La función de comparación

Ejemplo:

(a, b) => a - b


Si el resultado es negativo → a va antes que b.

Si el resultado es positivo → a va después que b.

Si es 0 → se quedan igual.

🔄 Ejemplo paso a paso

Arreglo inicial:

[25, 1, 9, 8, 456, 87, 2, 6]


Usamos:

arr.sort((a, b) => a - b);

Iteraciones simplificadas (como un bubble sort):

Compara 25 con 1 → como 25 > 1, los intercambia.
[1, 25, 9, 8, 456, 87, 2, 6]

Compara 25 con 9 → intercambia.
[1, 9, 25, 8, 456, 87, 2, 6]

Compara 25 con 8 → intercambia.
[1, 9, 8, 25, 456, 87, 2, 6]

(... sigue comparando e intercambiando ...)

Al final, queda:

[1, 2, 6, 8, 9, 25, 87, 456]

*/
const ordenarPoPaginas = books.slice().sort((a, b) => a.pages - b.pages);
ordenarPoPaginas