import {
  Module,
  NestModule,
  NestMiddleware,
  MiddlewareConsumer,
} from "@nestjs/common";
import { BooksController } from "./app.controller";
import { BooksService } from "./app.service";
import { LoggermiddlewareMiddleware } from "./loggermiddleware/loggermiddleware.middleware";

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggermiddlewareMiddleware).forRoutes("book");
  }
}
