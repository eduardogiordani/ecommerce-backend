import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { Custumer } from "./custumer.entity";
import { CustumerService } from "./custumer.service";

@Controller('custumers')
export class CustumerController {

  constructor(private readonly service: CustumerService) {}

  @Get()
  findAll(): Promise<Custumer[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Custumer> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Custumer not found', HttpStatus.NOT_FOUND);
    }

    return found;
  }
 
  @Post()
  create(@Body() custumer: Custumer) : Promise<Custumer> {
    return this.service.save(custumer);
  }

  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() custumer: Custumer): Promise<Custumer> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Custumer not found', HttpStatus.NOT_FOUND);
    }

    custumer.id = id;

    return this.service.save(custumer);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found) {
      throw new HttpException('Custumer not found', HttpStatus.NOT_FOUND);
    }

    return this.service.remove(id);
  }
}