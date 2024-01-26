import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as process from "process";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
