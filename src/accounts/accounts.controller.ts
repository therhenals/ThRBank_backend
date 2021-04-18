import { Controller, Get } from '@nestjs/common';
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
}
