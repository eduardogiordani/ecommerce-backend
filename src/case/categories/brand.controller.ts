import { Controller, Delete, HttpException, Put } from "@nestjs/common";
import { Brand } from "./Brand.entity";
import { BrandService } from "./B./brand.service
import { Get, Post, Param, ParseUUIDPipe, HttpStatus, Body, HttpCode } from "@nestjs/common";

@Controller('categories')
export class BrandController {
    constructor(private readonly service: BrandService) {}

    @Get()
    findAll():Promise<Brand[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseUUIDPipe) id:string): Promise<Brand> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        }
        return found;
    }

    @Post()
    create(@Body() Brand: Brand) : Promise<Brand> {
        return this.service.save(Brand);
    }

    @Put(':id') 
     async update(@Param('id', ParseUUIDPipe) id:string, @Body() Brand: Brand): Promise<Brand>{
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        }

        Brand.id = id;

        return this.service.save(Brand);
    }
    @Delete(':id')
    @HttpCode(204)
        async remove(@Param('id', ParseUUIDPipe) id:string): Promise<void> {
        const found = await this.service.findById(id);

        if(!found) {
            throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id)

    }
}