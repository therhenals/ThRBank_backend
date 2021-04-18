import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
//Mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//Classes
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
    constructor(@InjectModel('Accounts') private accountsModel: Model<AccountDocument>) { }

    async createAccountsDemo() {
        try {
            const accounts: Account[] = [
                {
                    user: '607b4bb6677cc029f3d3fd7b',
                    alias: 'La master',
                    balance: 0,
                    number: 11000500201,
                    type: 'ahorro'
                },
                {
                    user: '607b4bb6677cc029f3d3fd7b',
                    alias: 'La cool',
                    balance: 0,
                    number: 21010500201,
                    type: 'corriente'
                },
            ];
            await this.accountsModel.insertMany(accounts);
        } catch (error) {
            if (error.code == 11000) {
                throw new HttpException(
                    'Ya existe una cuenta con este numero',
                    HttpStatus.FORBIDDEN,
                );
            } else {
                throw new HttpException(
                    'Ha ocurrio un error',
                    HttpStatus.FORBIDDEN,
                );
            }
        }
    }

    async getAllAccounts(uid: string) {
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
