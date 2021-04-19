import { Controller, Get, Param } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
//Firebase
import { FirebaseUser, FirebaseUserClass } from 'src/firebase';
//Services
import { AccountsService } from './accounts.service';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
    constructor(
        private accountsService: AccountsService
    ) { }

    @Get('/all')
    async getAllAccounts(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
    ) {
        return await this.accountsService.getAllAccounts(firebaseUser.uid);
    }

    @Get('/:number')
    async getByNumber(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
        @Param('number') number: number
    ) {
        return await this.accountsService.findAccountByUserAndNumber(firebaseUser.uid, number);
    }
}
