import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//Services
import { AccountsService } from 'src/accounts/accounts.service';
//Mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//Classes
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
//Dto
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { GetAllDto } from './dto/get-all.dto';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel('Transactions') private transactionModel: Model<TransactionDocument>,
        private accountsService: AccountsService
    ) { }

    async createTransactionsDemo(account1: number, account2: number, account3: number, account4: number): Promise<void> {
        try {
            const transactions: Transaction[] = [
                {
                    amount: 1100000,
                    destinationAccount: account1,
                    type: 'consignacion'
                },
                {
                    amount: 1200000,
                    destinationAccount: account2,
                    type: 'consignacion'
                },
                {
                    amount: 1100000,
                    destinationAccount: account3,
                    type: 'consignacion'
                },
                {
                    amount: 1200000,
                    destinationAccount: account4,
                    type: 'consignacion'
                },
            ];
            for (const transaction of transactions) {
                await this.createTransaction(transaction);
            }
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }

    async createTransaction(createTransaction: CreateTransactionDto): Promise<void> {
        try {
            const transaction = new this.transactionModel(createTransaction as Transaction);
            if (createTransaction.type == 'consignacion') {
                await this.accountsService.updateBalance(createTransaction.destinationAccount, createTransaction.amount);
            } else if (createTransaction.type == 'transferencia') {
                await this.accountsService.updateBalance(createTransaction.destinationAccount, createTransaction.amount);
                await this.accountsService.updateBalance(createTransaction.senderAccount, -createTransaction.amount);
            }
            await transaction.save();
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }

    async createTransfer(userId: string, createTransfer: CreateTransferDto): Promise<void> {
        try {
            const senderAccount = await this.accountsService.findAccountByUserAndNumber(userId, createTransfer.senderAccount);
            if (!senderAccount) {
                throw new HttpException(
                    'Esta cuenta no te pertenece',
                    HttpStatus.FORBIDDEN,
                );
            } else {
                if (senderAccount.balance < createTransfer.amount) {
                    throw new HttpException(
                        'No tienes dinero suficiente',
                        HttpStatus.FORBIDDEN,
                    );
                }
            }
            await this.createTransaction({
                amount: createTransfer.amount,
                destinationAccount: createTransfer.destinationAccount,
                senderAccount: createTransfer.senderAccount,
                type: 'transferencia'
            })
        } catch (error) {
            throw new HttpException(
                error.message,
                HttpStatus.FORBIDDEN,
            );
        }
    }

    async getAll(getAllDto: GetAllDto): Promise<TransactionDocument[]> {
        try {
            const transactions = await this.transactionModel.find({ $or: [{ destinationAccount: getAllDto.numberAccount }, { senderAccount: getAllDto.numberAccount }] })
            return transactions;
        } catch (error) {
            throw new HttpException(
                'Ha ocurrio un error',
                HttpStatus.FORBIDDEN,
            );
        }
    }

}
