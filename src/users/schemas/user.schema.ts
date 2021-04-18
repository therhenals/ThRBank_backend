import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: { createdAt: 'dates.created', updatedAt: 'dates.updated' },
})
export class User {
    @Prop({ unique: true })
    username: string;

    @Prop()
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

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

export const UserSchema = SchemaFactory.createForClass(User);