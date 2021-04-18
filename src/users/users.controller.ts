import { Controller, Get } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
//Services
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('create-demo')
    async createUserDemo(): Promise<void> {
        return this.usersService.createUserDemo();
    }
}
