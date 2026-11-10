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

const book = getBook(2);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;


const updatedBook = {...book, moviePublicationDate: '2023-01-01', pages: 300};

const resumen = `${title} es un libro de ${pages} páginas`;

const res = pages > 1000 ? 'mas de mil' : 'menos de mil';

// NOTA short circuiting => es cuando un operador lógico (||, && o ??) detiene la evaluación en cuanto el resultado ya se puede determinar, sin seguir evaluando el resto de la expresión.

/*
1️⃣ Con OR (||)
Devuelve el primer valor verdadero que encuentre.
Si el primer valor ya es truthy, no evalúa lo demás.

console.log(true || false); // true (ni revisa el segundo)
console.log(false || "Hola"); // "Hola"
console.log("" || "Por defecto"); // "Por defecto"

Uso típico: asignar valores por defecto

let nombre = usuario.nombre || "Invitado";

2️⃣ Con AND (&&)
Devuelve el primer valor falso que encuentre.
Si el primer valor es falsy, no evalúa lo demás.

console.log(false && true); // false (ni revisa el segundo)
console.log(true && "Hola"); // "Hola"
console.log(0 && "Hola"); // 0

Uso típico: ejecutar algo solo si la primera condición es verdadera

usuario.activo && enviarCorreo(usuario.email);

3️⃣ Con Nullish Coalescing (??)
Devuelve el primer valor que no sea null ni undefined.

Es útil para diferenciar entre 0 o "" y valores realmente vacíos.

let edad = 0;
console.log(edad || 18); // 18 (porque 0 es falsy)
console.log(edad ?? 18); // 0 (porque 0 NO es null ni undefined)
*/

console.log(hasMovieAdaptation);
console.log(hasMovieAdaptation && "Tiene adaptación cinematográfica");

console.log(book.translations.spanish);
console.log(book.translations.spanish || "No disponible");

console.log(book.translations.spanish ?? "No disponible");