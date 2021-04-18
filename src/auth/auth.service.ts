import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//Mongo
import { Model } from 'mongoose';
//Services
import { UsersService } from 'src/users/users.service';
//Classes
import { UserClass } from 'src/users/classes/user.class';
import { LoginClass } from './classes/login.class';
//Dto
import { LoginDto } from './dto/login.dto';
//Libreries
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) { }
}
