import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Nest modules
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
