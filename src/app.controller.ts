import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book, BookWithoutId } from './FakeDatabase';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getHello(): string {
    return this.booksService.getHello();
  }
  @Get('book')
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }
  @Get('book/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.getBook(bookId);
  }
  @Post('book')
  addBook(@Body() book: BookWithoutId): Book {
    const bookData = book;
    return this.booksService.addBook(bookData);
  }

  @Patch('book/:id')
  updateBook(@Param('id') id: string, @Body() book: Partial<Book>): Book {
    return this.booksService.updateBook(+id, book);
  }

  @Delete('book/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(+id);
  }
}
