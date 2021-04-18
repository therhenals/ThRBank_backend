import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

//Mongo
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './schemas/account.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Accounts', schema: AccountSchema }])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule { }
