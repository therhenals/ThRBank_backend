import { IsNumber, IsString } from "class-validator";

export class CreateAccountDto {
    @IsString()
    alias: string;
    @IsString()
    type: string;
    @IsNumber()
    number: number;
    @IsString()
    bankingEntity: string;
    @IsString()
    currency: string;
    @IsNumber()
    identification: number;
}