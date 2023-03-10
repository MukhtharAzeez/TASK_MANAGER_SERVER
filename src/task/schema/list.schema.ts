import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListDocument = HydratedDocument<List>;

@Schema({
  timestamps: true,
})
export class List {
  @Prop({ required: true, trim: true, minlength: 1 })
  title: string;
}
export const ListSchema = SchemaFactory.createForClass(List);
