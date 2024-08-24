import { Book, BookWithoutId } from './FakeDatabase';
export declare class BooksService {
    getHello(): string;
    getAllBooks(): Book[];
    getBook(bookId: number): Book;
    addBook(bookData: BookWithoutId): Book;
    updateBook(bookId: number, book: Partial<Book>): Book;
    deleteBook(bookId: number): Book;
}
