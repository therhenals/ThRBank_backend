import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//Mongo
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//Classes
import { User, UserDocument } from './schemas/user.schema';
//Libraries
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private usersModel: Model<UserDocument>) { }

    async createUserDemo(): Promise<void> {
        try {
            const salt = await bcrypt.genSalt();
            const user = new this.usersModel({
                username: 'demo',
                password: await bcrypt.hash('demopass', salt),
                firstName: 'Luis',
                lastName: 'Rhenals'
            } as User);
            await user.save();
        } catch (error) {
            if (error.code == 11000) {
                throw new HttpException(
                    'Ya existe un usuario con este username',
                    HttpStatus.FORBIDDEN,
                );
            } else {
                throw new HttpException(
                    'Ha ocurrido un error',
                    HttpStatus.FORBIDDEN,
                );
            }
        }
    }

    async findOne(username: string): Promise<UserDocument> {
        try {
            const user = await this.usersModel.findOne({ username: username });
            return user;
        } catch (error) {
            throw new HttpException('Ocurrio un error', HttpStatus.FORBIDDEN);
        }
    }

    async profile(uid: string) {
        const client = await this.usersModel
            .findById(uid)
            .select(['-password']);
        return client;
    }
}
