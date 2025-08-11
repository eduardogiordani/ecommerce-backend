/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'postgres',
      type: 'postgres',
      host: 'aws-0-us-east-2.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.rdtkdkyuirlxbhqkoaoy',
      password: 'ecommerce123',
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
