import { Module } from '@nestjs/common';
import { SparesService } from './spares.service';
import { SparesController } from './spares.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Spare, SpareSchema } from './schema/spare';

@Module({
  imports : [MongooseModule.forFeature([{name: Spare.name, schema : SpareSchema}])],
  controllers: [SparesController],
  providers: [SparesService]
})
export class SparesModule {}
