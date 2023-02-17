import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SparesService } from './spares.service';
import { CreateSpareDto } from './dto/create-spare.dto';
import { UpdateSpareDto } from './dto/update-spare.dto';

@Controller('spares')
export class SparesController {
  constructor(private readonly sparesService: SparesService) {}

  @Post()
  create(@Body() createSpareDto: CreateSpareDto) {
    return this.sparesService.create(createSpareDto);
  }

  @Post('/add')
  insertMany(@Body() createSpareDto: CreateSpareDto[]) {
    return this.sparesService.insertMany(createSpareDto);
  }

  @Get()
  findAll() {
    return this.sparesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sparesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpareDto: UpdateSpareDto) {
    return this.sparesService.update(id, updateSpareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sparesService.remove(id);
  }
}
