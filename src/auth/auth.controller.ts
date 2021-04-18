import { Controller, Post, Body } from '@nestjs/common';
//Swagger
import { ApiTags } from '@nestjs/swagger';
//Services
import { AuthService } from './auth.service';
//Dto
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
}
