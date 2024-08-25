import { BooksService } from "./app.service";
import { Book, BookWithoutId } from "./FakeDatabase";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getHello(): string;
    getAllBooks(): Book[];
    getBookById(id: string): Book | undefined;
    addBook(book: BookWithoutId): Book;
    updateBook(id: string, book: Partial<Book>): Book;
    deleteBook(id: string): Book;
}
