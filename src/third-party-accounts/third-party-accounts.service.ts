import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
//Mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//Classes
import { Account, AccountDocument } from './schemas/account.schema';
import { CreateAccountDto } from './dto/create-account.dto';
import { AccountClass } from './classes/account.class';

@Injectable()
export class ThirdPartyAccountsService {
    constructor(@InjectModel('ThirdPartyAccounts') private accountsModel: Model<AccountDocument>) { }

    async createAccount(userId: string, createAccount: CreateAccountDto): Promise<void> {
        const accountFind = await this.accountsModel.findOne({ user: userId, number: createAccount.number });
        if (accountFind) {
            console.log('encontrada')
            throw new HttpException(
                `Este numero de cuenta esta asociado al alias ${accountFind.alias}`,
                HttpStatus.FORBIDDEN,
            );
        }
        const account = new this.accountsModel({ user: userId, ...createAccount } as Account);
        await account.save();
    }

    async getAllAccounts(uid: string): Promise<AccountDocument[]> {
        try {
            const accounts = await this.accountsModel.find({ user: uid });
            return accounts;
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }
}
