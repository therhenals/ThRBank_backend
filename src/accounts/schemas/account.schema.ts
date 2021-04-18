import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongo } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema({
    timestamps: { createdAt: 'dates.created', updatedAt: 'dates.updated' },
})
export class Account {
    @Prop({
        type: SchemaMongo.Types.ObjectId,
        ref: 'Users',
    })
    user: SchemaMongo.Types.ObjectId | string;

    @Prop()
    alias: string;

    @Prop()
    balance: number;

    @Prop()
    type: string;

    @Prop({ unique: true })
    number: number;

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

export const AccountSchema = SchemaFactory.createForClass(Account);