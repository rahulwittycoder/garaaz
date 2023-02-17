import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SparesModule } from './spares/spares.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".local.env"]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (cfg : ConfigService)=> ({uri: cfg.get("MONGO_URI")}),
      inject: [ConfigService]
    }),
    SparesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
