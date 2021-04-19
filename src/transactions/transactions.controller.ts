import { Body, Controller, Post, Get, Query } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
//Firebase
import { FirebaseUser, FirebaseUserClass } from 'src/firebase';

//Services
import { TransactionsService } from './transactions.service';
//Classes
//Dto
import { CreateTransferDto } from './dto/create-transfer.dto';
import { GetAllDto } from './dto/get-all.dto';

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

    @Get('all')
    async getAll(
        @Query() getAll: GetAllDto
    ) {
        return await this.transactionsService.getAll(getAll);
    }
}
