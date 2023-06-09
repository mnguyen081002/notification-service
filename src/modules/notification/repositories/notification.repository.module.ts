import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DATABASE_CONNECTION_NAME } from "src/common/database/constants/database.constant";

import { NotificationEntity, NotificationSchema } from "../entity/notification.entity";
import { NotificationRepository } from "./notification.repository";

@Module({
  providers: [NotificationRepository],
  exports: [NotificationRepository],
  controllers: [],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: NotificationEntity.name,
          schema: NotificationSchema,
        },
      ],
      DATABASE_CONNECTION_NAME,
    ),
  ],
})
export class NotificationRepositoryModule {}
