import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//Services
import { FirebaseAuthService } from 'src/firebase';
import { UsersService } from 'src/users/users.service';
//Classes
import { DefaultRejectClass } from 'src/utils';
import { UserDocument } from 'src/users/schemas/user.schema';
import { LoginClass } from './classes/login.class';
//Dto
import { LoginDto } from './dto/login.dto';
//Libreries
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private usersService: UsersService,
  ) { }

  async validate(username: string, password: string): Promise<UserDocument> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.usersService.findOne(username);
        if (await compare(password, user.password)) {
          resolve(user);
        } else {
          reject({
            message: 'Contraseña incorrecta',
            statusCode: HttpStatus.FORBIDDEN,
          } as DefaultRejectClass);
        }
      } catch (error) {
        reject({
          message: 'Ocurrio un error',
          statusCode: HttpStatus.FORBIDDEN,
        } as DefaultRejectClass);
      }
    });
  }

  async login(loginDto: LoginDto): Promise<LoginClass> {
    try {
      const store = await this.validate(loginDto.username, loginDto.password);
      const token = await this.firebaseAuthService.generateToken(
        String(store._id),
        {
          name: `${store.firstName} ${store.lastName}`
        },
      );
      return { token };
    } catch (error) {
      throw new HttpException(error.message, error.code);
    }
  }
}
