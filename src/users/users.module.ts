import { Module, Global } from '@nestjs/common';
import { UsersService } from './users.service';
//Mongo
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
