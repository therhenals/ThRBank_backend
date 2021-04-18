import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsOptional()
    @IsNumber()
    senderAccount?: number;
    @IsNumber()
    destinationAccount: number;
    @IsNumber()
    amount: number;
    @IsString()
    type: string;
}