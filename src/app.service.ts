import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AccountsService } from './accounts/accounts.service';
import { TransactionsService } from './transactions/transactions.service';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(
    private usersService: UsersService,
    private accountsService: AccountsService,
    private transactionsService: TransactionsService
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async initialData() {
    try {
      const users = await this.usersService.createUsersDemo();
      const accounts = await this.accountsService.createAccountsDemo(
        users[0]._id,
        users[1]._id
      );
      await this.transactionsService.createTransactionsDemo(
        accounts[0].number,
        accounts[1].number,
        accounts[2].number,
        accounts[3].number
      );
    } catch (error) {
      throw new HttpException(
        'Ha ocurrio un error',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
