import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { GoogleStrategy } from './google/google.strategy';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://danvieira:dan2335132@ds018258.mlab.com:18258/dnodestr', {
      useNewUrlParser: true,
    }),
    ProductModule,
    UsersModule,
    AuthModule,
    TodosModule,
  ],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleService, GoogleStrategy],
})
export class AppModule {}
