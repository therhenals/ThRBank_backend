import { Body, Controller, Post } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
//Firebase
import { FirebaseUser, FirebaseUserClass } from 'src/firebase';

//Services
import { TransactionsService } from './transactions.service';
//Classes
//Dto
import { CreateTransferDto } from './dto/create-transfer.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    @Post('create')
    async createTransfern(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
        @Body() createTransfer: CreateTransferDto
    ) {
        return await this.transactionsService.createTransfer(
            firebaseUser.uid,
            createTransfer
        );
    }
}
