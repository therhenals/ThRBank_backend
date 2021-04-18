import { Controller, Post, Body } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
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
}
