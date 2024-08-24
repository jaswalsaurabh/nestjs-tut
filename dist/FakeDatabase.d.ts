export interface Book {
    title: string;
    author: string;
    id: number;
    publicationYear: number;
}
export type BookWithoutId = Omit<Book, 'id'>;
export declare const books: Book[];
