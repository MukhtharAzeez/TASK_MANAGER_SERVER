import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List, ListDocument } from './schema/list.schema';
import { Task, TaskDocument } from './schema/task.schema';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel(List.name) private listModel: Model<ListDocument>,
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
  ) {}
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
  async updateList(listId: string, title: string) {
    await this.listModel.updateOne({ _id: listId }, { $set: { title } });
    return true;
  }
  deleteAList(id: string) {
    return this.listModel.deleteOne({ _id: id });
  }
  getListTasks(listId: string) {
    return this.taskModel.find({ listId });
  }
  addTaskToList(listId: string, title: string) {
    const newTask = new this.taskModel({ listId, title, completed: false });
    return newTask.save();
  }
  updateTask(body: { taskId: string; title: string; completed: boolean }) {
    return this.taskModel.updateOne(
      { _id: body.taskId },
      { $set: { title: body.title, completed: body.completed } },
    );
  }
  deleteATask(taskId: string) {
    return this.taskModel.deleteOne({ _id: taskId });
  }
}
