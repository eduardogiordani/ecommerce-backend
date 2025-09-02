/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';
import { ProductModule } from './cases/products/product.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './cases/cities/city.module';
import { CustumerModule } from './cases/custumers/custumer.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      database: process.env.DATABASE_DATABASE,
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    CategoryModule,
    BrandModule,
    ProductModule,
    CityModule,
    CustumerModule
  ],
})
export class AppModule {}
