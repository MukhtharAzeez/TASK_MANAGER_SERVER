import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List, ListDocument } from './schema/list.schema';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel(List.name) private listModel: Model<ListDocument>) {}
  getUserLists() {
    try {
      return this.listModel.find({});
    } catch (error) {
      throw new HttpException(
        'Something happens wrong',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
  addUserList(title: string) {
    const newList = new this.listModel({ title });
    return newList.save();
  }
  updateList(listId: string, title: string) {
    return this.listModel.updateOne({ _id: listId }, { $set: { title } });
  }
}
