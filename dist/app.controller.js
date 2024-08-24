"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    getHello() {
        return this.booksService.getHello();
    }
    getAllBooks() {
        return this.booksService.getAllBooks();
    }
    getBookById(id) {
        const bookId = +id;
        return this.booksService.getBook(bookId);
    }
    addBook(book) {
        const bookData = book;
        return this.booksService.addBook(bookData);
    }
    updateBook(id, book) {
        return this.booksService.updateBook(+id, book);
    }
    deleteBook(id) {
        return this.booksService.deleteBook(+id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BooksController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('book'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], BooksController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BooksController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Post)('book'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], BooksController.prototype, "addBook", null);
__decorate([
    (0, common_1.Patch)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], BooksController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('book/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.BooksService])
], BooksController);
//# sourceMappingURL=app.controller.js.map