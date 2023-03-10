import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;
@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ required: true, trim: true, minLength: 1 })
  title: string;

  @Prop({ required: true })
  listId: Types.ObjectId;

  @Prop({ required: true })
  completed: boolean;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
