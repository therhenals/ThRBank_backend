import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Nest modules
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// App modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ThirdPartyAccountsModule } from './third-party-accounts/third-party-accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}?retryWrites=true`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASSWORD
      },
    ),
    UsersModule,
    AuthModule,
    FirebaseModule,
    AccountsModule,
    TransactionsModule,
    ThirdPartyAccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
