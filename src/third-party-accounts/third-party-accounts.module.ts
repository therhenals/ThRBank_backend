import { Module } from '@nestjs/common';
import { ThirdPartyAccountsController } from './third-party-accounts.controller';
import { ThirdPartyAccountsService } from './third-party-accounts.service';

//Mongo
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './schemas/account.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ThirdPartyAccounts', schema: AccountSchema }])],
  controllers: [ThirdPartyAccountsController],
  providers: [ThirdPartyAccountsService]
})
export class ThirdPartyAccountsModule { }
