import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //host: 'localhost',
      //port: 5432,
      //database: 'micro_order',
      url: 'postgres://cunkhifa:slN8vP_ru-SZJlqNzjxVGoW59IuF6DMF@trumpet.db.elephantsql.com/cunkhifa',
      username: 'cunkhifa',
      password: 'slN8vP_ru-SZJlqNzjxVGoW59IuF6DMF',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // never true in production!
    }),
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
