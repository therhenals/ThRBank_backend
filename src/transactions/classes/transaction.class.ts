export class TransactionClass {
    senderAccount: number;
    destinationAccount: number;
    amount: number;
    type: string;
    _id?: string;
    dates?: {
        created: number;
        updated: number;
    };
}