import { Injectable } from '@nestjs/common';
import { Book, books, BookWithoutId } from './FakeDatabase';

@Injectable()
export class BooksService {
  getHello(): string {
    return 'Hello World Dost!';
  }
  getAllBooks(): Book[] {
    return books;
  }
  getBook(bookId: number): Book {
    return books.find((book) => book.id == bookId);
  }
  addBook(bookData: BookWithoutId): Book {
    const newId = books.length + 1;
    console.log('bookData', bookData);
    const newBook = { ...bookData, id: newId };
    console.log('newBook', newBook);
    books.push({ ...newBook });
    return newBook;
  }
  updateBook(bookId: number, book: Partial<Book>): Book {
    let currBook = books.find((book) => book.id == bookId);
    currBook = { ...currBook, ...book };
    books[bookId - 1] = currBook;
    return currBook;
  }
  deleteBook(bookId: number): Book {
    const deletedBook = books.find((book) => book.id == bookId);
    books.splice(bookId - 1, 1);
    return deletedBook;
  }
}
