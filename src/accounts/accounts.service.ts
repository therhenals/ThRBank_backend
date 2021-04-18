import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
//Mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//Classes
import { Account, AccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountsService {
    constructor(@InjectModel('Accounts') private accountsModel: Model<AccountDocument>) { }

    async createAccountsDemo(user1: string, user2: string): Promise<AccountDocument[]> {
        try {
            const accounts: Account[] = [
                {
                    user: user1,
                    alias: 'La master',
                    balance: 0,
                    number: 11000500201,
                    type: 'ahorro'
                },
                {
                    user: user1,
                    alias: 'La cool',
                    balance: 0,
                    number: 21010500201,
                    type: 'corriente'
                },
                {
                    user: user2,
                    alias: 'La supermaster',
                    balance: 0,
                    number: 11010500201,
                    type: 'ahorro'
                },
                {
                    user: user2,
                    alias: 'La supercool',
                    balance: 0,
                    number: 21010520201,
                    type: 'corriente'
                },
            ];
            return await this.accountsModel.insertMany(accounts);
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

    async updateBalance(accountNumber: number, amount: number) {
        try {
            const account = this.accountsModel.findOne({ number: accountNumber });
            await account.update(
                { $inc: { balance: amount } }
            );
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }

    async findAccountByUserAndNumber(user: string, number: number): Promise<AccountDocument> {
        try {
            const account = await this.accountsModel.findOne({ user: user, number: number });
            return account;
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }
}
