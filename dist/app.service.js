"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const FakeDatabase_1 = require("./FakeDatabase");
let BooksService = class BooksService {
    getHello() {
        return 'Hello World Dost!';
    }
    getAllBooks() {
        return FakeDatabase_1.books;
    }
    getBook(bookId) {
        return FakeDatabase_1.books.find((book) => book.id == bookId);
    }
    addBook(bookData) {
        const newId = FakeDatabase_1.books.length + 1;
        console.log('bookData', bookData);
        const newBook = { ...bookData, id: newId };
        console.log('newBook', newBook);
        FakeDatabase_1.books.push({ ...newBook });
        return newBook;
    }
    updateBook(bookId, book) {
        let currBook = FakeDatabase_1.books.find((book) => book.id == bookId);
        currBook = { ...currBook, ...book };
        FakeDatabase_1.books[bookId - 1] = currBook;
        return currBook;
    }
    deleteBook(bookId) {
        const deletedBook = FakeDatabase_1.books.find((book) => book.id == bookId);
        FakeDatabase_1.books.splice(bookId - 1, 1);
        return deletedBook;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=app.service.js.map