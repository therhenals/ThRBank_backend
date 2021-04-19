import { Body, Controller, Post, Get } from '@nestjs/common';
// swagger
import { ApiTags } from '@nestjs/swagger';
//Firebase
import { FirebaseUser, FirebaseUserClass } from 'src/firebase';
//Services
import { ThirdPartyAccountsService } from './third-party-accounts.service';
//Classes
import { AccountClass } from './classes/account.class';
//Dto
import { CreateAccountDto } from './dto/create-account.dto';

@ApiTags('third-party-accounts')
@Controller('third-party-accounts')
export class ThirdPartyAccountsController {
    constructor(private thirdPartyAccountsService: ThirdPartyAccountsService) { }

    @Post('inscribe')
    async inscribe(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
        @Body() createAccountDto: CreateAccountDto
    ) {
        return await this.thirdPartyAccountsService.createAccount(firebaseUser.uid, createAccountDto);
    }

    @Get('/all')
    async getAllAccounts(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
    ): Promise<AccountClass[]> {
        return await this.thirdPartyAccountsService.getAllAccounts(firebaseUser.uid);
    }
}
