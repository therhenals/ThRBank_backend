import { Controller, Post, Body, Get } from '@nestjs/common';
//Swagger
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
//Firebase
import { FirebaseUser, FirebaseUserClass } from 'src/firebase';
//Services
import { AuthService } from './auth.service';
// Classes
import { LoginClass } from './classes/login.class';
//Dto
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<LoginClass> {
        return await this.authService.login(loginDto);
    }

    @Get('me')
    async me(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
    ) {
        return await this.authService.me(firebaseUser);
    }
}
