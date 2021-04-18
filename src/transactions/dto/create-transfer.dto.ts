import { IsNumber } from "class-validator";

export class CreateTransferDto {
    @IsNumber()
    amount: number;
    @IsNumber()
    destinationAccount: number;
    @IsNumber()
    senderAccount: number;
}