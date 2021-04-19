export class AccountClass {
    user: string | any;
    alias: string;
    type: string;
    number: number;
    bankingEntity: string;
    currency: string;
    identification: number;
    _id?: string;
    dates?: {
        created: number;
        updated: number;
    };
}