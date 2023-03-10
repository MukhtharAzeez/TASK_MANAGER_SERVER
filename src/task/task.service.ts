import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}
  getUserLists() {
    return this.taskRepository.getUserLists();
  }
  addUserList(title: string) {
    return this.taskRepository.addUserList(title);
  }
  updateList(listId: string, title: string) {
    return this.taskRepository.updateList(listId, title);
  }
}
