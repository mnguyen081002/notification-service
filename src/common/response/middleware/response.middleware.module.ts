import type { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { ResponseTimeMiddleware } from "src/common/response/middleware/time/response.time.middleware";

@Module({})
export class ResponseMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ResponseTimeMiddleware).forRoutes("*");
  }
}
