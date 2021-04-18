import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({
    timestamps: { createdAt: 'dates.created', updatedAt: 'dates.updated' },
})
export class Transaction {
    @Prop()
    senderAccount?: number;

    @Prop()
    destinationAccount: number;

    @Prop()
    amount: number;

    @Prop()
    type: string; 

    @Prop(
        raw({
            created: { type: Number },
            updated: { type: Number },
        }),
    )
    dates?: {
        created: number;
        updated: number;
    };

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);