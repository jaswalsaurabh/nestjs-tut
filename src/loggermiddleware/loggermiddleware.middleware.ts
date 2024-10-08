import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggermiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("this is req inside middleware");
    next();
  }
}
